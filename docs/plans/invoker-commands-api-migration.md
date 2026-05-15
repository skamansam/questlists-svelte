# Invoker Commands API Migration Plan (Revised)

## Overview

The [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) provides a declarative way for buttons to control interactive elements like dialogs, popovers, and custom elements using the `commandfor` and `command` attributes. This API is now baseline and should be used instead of custom JavaScript solutions for button-element control relationships.

## Element Selection Guide

Before migrating any component, use this decision table to choose the correct element:

| Use case | Element | Invoker command |
|---|---|---|
| Main sidebar (persistent, desktop) | `<aside>` in normal flow | — |
| Main sidebar (collapsible, mobile) | `<aside popover="manual">` | `toggle-popover` |
| Inline accordion / sub-menu | `<details>` / `<summary>` | — (native toggle) |
| Dropdown menu (non-modal) | `<div popover="auto">` | `toggle-popover` |
| Modal dialog (interrupts user) | `<dialog>` | `show-modal` / `close` |
| Drawer / off-canvas panel | `<aside popover="manual">` | `toggle-popover` |

**Key rules:**
- `<dialog>` is for **modal interruptions only** — it traps focus and blocks the page. Never use it for sidebars, drawers, or inline navigation.
- `<aside>` is a **page-level landmark** — use it once or twice per page for the sidebar/drawer, never for repeated sub-menus.
- `<details>`/`<summary>` is the right native element for **inline collapsible content** — no JS or CSS required for the toggle, and it's fully accessible.
- `popover` targets the **top layer** — only use it for content that should float above the page (dropdowns, off-canvas drawers). Inline accordion menus should stay in normal flow.

---

## Components Analysis

### Components That Should Use Invoker Commands API

#### 1. AppHeader.svelte
**Location**: `src/lib/components/AppHeader/AppHeader.svelte`

**Current Implementation**: Uses custom `data-dropdown-toggle` and `data-drawer-toggle` attributes with JavaScript to control dropdowns and drawers.

**Elements to Migrate**:

- **Drawer toggle** (lines 16–48): Currently uses checkbox hack with `<label for="drawer-toggle">`. The drawer is a panel that slides in alongside content — it is **not a modal**. Migrate to `<aside popover="manual">` with `commandfor`/`toggle-popover`. Do not use `<dialog>` — it would trap focus and block the page, which is wrong for a drawer.
- **Search toggle** (lines 87–97): Uses `data-drawer-toggle="drawer-navigation"`. Migrate to `<div popover="auto">` with `commandfor`/`toggle-popover`.
- **Notifications dropdown** (lines 99–383): Uses `data-dropdown-toggle`. Non-modal dropdown — migrate to `<div popover="auto">` with `commandfor`/`toggle-popover`.
- **Apps dropdown** (lines 385–553): Uses `data-dropdown-toggle`. Non-modal dropdown — migrate to `<div popover="auto">` with `commandfor`/`toggle-popover`.
- **User menu dropdown** (lines 554–685): Uses `data-dropdown-toggle`. Non-modal dropdown — migrate to `<div popover="auto">` with `commandfor`/`toggle-popover`.

**Migration Approach**:
1. Replace drawer `<label>`/checkbox with `<aside popover="manual">` and a button using `commandfor`/`command="toggle-popover"`
2. Replace dropdown `<div class="hidden">` elements with `<div popover="auto">`
3. Replace `data-dropdown-toggle` buttons with `commandfor` and `command="toggle-popover"`
4. Add close buttons inside popovers using `commandfor="id" command="hide-popover"`
5. Remove custom JavaScript event handlers for dropdown/drawer toggling

**Example Migration — Drawer**:
```svelte
<!-- Before: checkbox hack -->
<input type="checkbox" id="drawer-toggle" class="sr-only" />
<label for="drawer-toggle">☰ Menu</label>
<aside id="drawer">...</aside>

<!-- After: Invoker Commands with popover -->
<button commandfor="drawer" command="toggle-popover">☰ Menu</button>
<aside id="drawer" popover="manual">
  <button commandfor="drawer" command="hide-popover">✕ Close</button>
  ...
</aside>
```

**Example Migration — Dropdown**:
```svelte
<!-- Before -->
<button data-dropdown-toggle="notification-dropdown">Notifications</button>
<div id="notification-dropdown" class="hidden">...</div>

<!-- After -->
<button commandfor="notification-dropdown" command="toggle-popover">Notifications</button>
<div id="notification-dropdown" popover="auto">
  ...
</div>
```

---

#### 2. SideBar.svelte
**Location**: `src/lib/components/Menu/SideBar.svelte`

**Current Implementation**: Uses custom `data-collapse-toggle` and `data-dropdown-toggle` attributes with JavaScript to control collapsible menu sections and a language dropdown.

**Elements to Migrate**:

- **Pages sub-menu** (lines 50–108): Uses `data-collapse-toggle="dropdown-pages"`. This is an **inline accordion menu inside the sidebar** — it should stay in document flow. Migrate to `<details>`/`<summary>`. Do **not** use `<aside popover>` — that would pull the content into the top layer, breaking the sidebar layout.
- **Sales sub-menu** (lines 111–169): Same as above. Migrate to `<details>`/`<summary>`.
- **Authentication sub-menu** (lines 199–257): Same as above. Migrate to `<details>`/`<summary>`.
- **Language dropdown** (lines 373–571): Uses `data-dropdown-toggle`. This is a floating dropdown, not inline navigation. Migrate to `<div popover="auto">` with `commandfor`/`toggle-popover`.

**Migration Approach**:
1. Keep the outer sidebar as a plain `<aside>` (semantic landmark, in normal document flow)
2. Replace `data-collapse-toggle` sections with `<details>`/`<summary>` — no JS, no CSS, no Invoker Commands needed
3. Replace the language `data-dropdown-toggle` with `<div popover="auto">` and Invoker Commands
4. Remove custom JavaScript event handlers

**Example Migration — Inline Sub-menu (accordion)**:
```svelte
<!-- Before -->
<button data-collapse-toggle="dropdown-pages">
  Pages
  <svg><!-- chevron --></svg>
</button>
<ul id="dropdown-pages" class="hidden">
  <li><a href="/settings">Settings</a></li>
  <li><a href="/kanban">Kanban</a></li>
</ul>

<!-- After: <details>/<summary> — zero JS, zero CSS for the toggle -->
<details>
  <summary>
    Pages
    <svg><!-- chevron, rotates via CSS details[open] summary svg --></svg>
  </summary>
  <ul>
    <li><a href="/settings">Settings</a></li>
    <li><a href="/kanban">Kanban</a></li>
  </ul>
</details>
```

**Example Migration — Language Dropdown**:
```svelte
<!-- Before -->
<button data-dropdown-toggle="language-dropdown">EN</button>
<div id="language-dropdown" class="hidden">...</div>

<!-- After -->
<button commandfor="language-dropdown" command="toggle-popover">EN</button>
<div id="language-dropdown" popover="auto">
  ...
</div>
```

**Why not `<aside popover>` for sub-menus?**

The original plan recommended wrapping each sub-menu in `<aside popover="auto">`. This is wrong for two reasons:

1. **Semantic abuse**: `<aside>` is a page-level landmark. Screen readers announce landmarks in page navigation. Multiple `<aside>` elements per sidebar creates noise and confuses users relying on assistive technology. Sub-menus have no landmark meaning — they're just lists.
2. **Wrong rendering layer**: `popover` elements render in the top layer, outside the sidebar's layout context. An inline accordion should remain in document flow so it pushes other items down naturally.

---

### Components That Do NOT Need Migration

#### 3. App.svelte
**Reason**: Wrapper component only, no button-element control relationships.

#### 4. DarkModeToggle.svelte
**Reason**: Toggle button controls app state via Svelte store, not another DOM element. Invoker Commands API is for controlling DOM elements, not application state.

#### 5. Gravatar.svelte
**Reason**: Display-only component with no buttons.

#### 6. QuestlistsLogo.svelte
**Reason**: SVG-only component with no interactive elements.

---

## Migration Checklist

### AppHeader.svelte
- [ ] Convert drawer toggle (checkbox hack) to `<aside popover="manual">` with `commandfor`/`command="toggle-popover"`
- [ ] Add close button inside drawer with `commandfor="drawer" command="hide-popover"`
- [ ] Convert search toggle to `<div popover="auto">` with Invoker Commands
- [ ] Convert notifications dropdown to `<div popover="auto">` with Invoker Commands
- [ ] Convert apps dropdown to `<div popover="auto">` with Invoker Commands
- [ ] Convert user menu dropdown to `<div popover="auto">` with Invoker Commands
- [ ] Remove custom JavaScript event handlers for dropdown/drawer toggling
- [ ] Test keyboard navigation and accessibility
- [ ] Verify mobile responsive behavior
- [ ] Verify drawer does not trap focus (it should not — it is not a modal)

### SideBar.svelte
- [ ] Convert Pages sub-menu to `<details>`/`<summary>`
- [ ] Convert Sales sub-menu to `<details>`/`<summary>`
- [ ] Convert Authentication sub-menu to `<details>`/`<summary>`
- [ ] Convert Language dropdown to `<div popover="auto">` with Invoker Commands
- [ ] Verify outer `<aside>` remains a single landmark (not multiplied per sub-menu)
- [ ] Remove custom JavaScript event handlers for collapse/dropdown toggling
- [ ] Style `<details>`/`<summary>` chevron rotation via CSS `details[open] summary svg { rotate: 180deg }`
- [ ] Test popover behavior and keyboard navigation
- [ ] Verify mobile responsive behavior

---

## Implementation Notes

### `<details>`/`<summary>` Styling Tips

The native toggle requires no JS. CSS handles the rest:

```css
/* Remove default marker */
details > summary {
  list-style: none;
  cursor: pointer;
}
details > summary::-webkit-details-marker {
  display: none;
}

/* Rotate a custom chevron icon when open */
details[open] summary .chevron {
  rotate: 180deg;
  transition: rotate 0.2s ease;
}

/* Animate content open (CSS only) */
details > ul {
  overflow: hidden;
}
```

### Drawer Animation with `popover`

CSS-only slide-in animation for `<aside popover="manual">`:

```css
#drawer {
  position: fixed;
  inset: 0 auto 0 0;
  width: 280px;
  translate: -100% 0;
  transition:
    translate 0.3s ease,
    overlay 0.3s ease allow-discrete,
    display 0.3s ease allow-discrete;
}

#drawer:popover-open {
  translate: 0 0;
}

@starting-style {
  #drawer:popover-open {
    translate: -100% 0;
  }
}
```

### Popover `auto` vs `manual`

- `popover="auto"`: Closes automatically on click outside or Escape. Correct for dropdowns.
- `popover="manual"`: Must be explicitly closed. Correct for the sidebar drawer (where clicking the main content area should not close it unless you want that behavior).

### Invoker Commands vs `popovertarget`

Both achieve the same result for basic show/hide. Prefer Invoker Commands (`commandfor`/`command`) for consistency across the codebase, and because it fires a `CommandEvent` on the target element which allows custom behavior via a single listener if needed.

```html
<!-- Both are equivalent for toggle: -->
<button commandfor="my-popover" command="toggle-popover">Open</button>
<button popovertarget="my-popover" popovertargetaction="toggle">Open</button>
```

### Custom Commands

For complex behaviors not covered by built-in commands, use custom `CommandEvent` listeners. Prefix custom command names with `--`:

```javascript
document.getElementById('my-element').addEventListener('command', (e) => {
  if (e.command === '--my-custom-action') {
    // handle it
  }
});
```

### Testing Strategy
1. Test each dropdown/drawer opens and closes correctly
2. Test keyboard navigation (Enter, Space, Escape)
3. Test click outside to close (for `popover="auto"` elements)
4. Test that the drawer does **not** close on outside click (it uses `popover="manual"`)
5. Test `<details>` sub-menus open/close and retain state on keyboard
6. Test mobile responsive behavior
7. Test accessibility with screen readers — verify landmark count in sidebar is 1, not 4+
8. Verify no JavaScript errors in console

---

## References
- [MDN: Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
- [MDN: Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [MDN: `<details>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
- [MDN: `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- [MDN: CommandEvent](https://developer.mozilla.org/en-US/docs/Web/API/CommandEvent)
- [MDN: `<aside>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/aside)