### Syntax

```html
<w-alert variant="info" show="">
  <p class="font-bold">This is "info" variant of the alert element</p>
  <p>With an additional description</p>
</w-alert>
```

### Accessibility

Use the ARIA live region `role` attribute to provide meaning to the alert
element (defaults to "alert"). If you want to remove the role from the alert and
assign it to its particular child (e.g. title), you can do so by setting `role`
property of the `Alert` component to an empty string and assigning a respective
`role` attribute on the child element. Read more about live region `role`
attribute on
[MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes).

#### Alert with "alert" role on a descendant element

```html
<w-alert type="info" show={show} role="">
  <p role="alert" class="font-bold">
    This is "info" variant of the alert element
  </p>
  <p>With an additional description</p>
  <a>And a link to more information</a>
</w-alert>
```

### Props

<api-table type=elements component="Alert" />
