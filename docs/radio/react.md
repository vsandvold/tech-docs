## Toggle component

The toggle component allows you to render checkboxes or radio buttons, all in
one component. All you have to do is specify the Toggle `type` and let the
component handle the rest. Toggle is built to handle both single and multiple
options.

**You must keep track of state yourself**. The state has to be handled
differently depending on whether you want to use single or multiple options. See
examples below.

## Import

```js
import { Toggle } from '@fabric-ds/react';
```

## Toggle with multiple options

We've already had a look at checkboxes, but Toggle can also render radio options
and buttons.

### Radio

```jsx example
function Example() {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  return (
    <Toggle
      type="radio"
      title="Favorite color"
      helpText="Choose your absolute favorite color"
      options={options}
      onChange={(selected) => console.log(selected)}
    />
  );
}
```

**Note** the `helpText` property. This gives you the option to further explain
the purpose of the toggle and the action to take.

### Radio buttons

```jsx example
function Example() {
  const options = [
    { label: 'Oslo', value: 1 },
    { label: 'Lørenskog', value: 2 },
    { label: 'Hamar', value: 3 },
  ];

  const [equalWidth, setEqualWidth] = React.useState(false);

  return (
    <>
      <Button
        className="mb-8"
        onClick={() => setEqualWidth(!equalWidth)}
        primary={equalWidth}
        negative={!equalWidth}
        small
      >
        Equal width: {equalWidth.toString()}
      </Button>
      <div>
        <Toggle
          type="radio-button"
          options={options}
          equalWidth={equalWidth}
          onChange={(e) => console.log(e)}
        />
      </div>
    </>
  );
}
```

Radio buttons have the special property `equalWidth`, which will render each
option with equal width.

## Validation

Validation is as easy as passing the property `invalid` with a `helpText` to
further explain the error. `helpText` can also be used as an assistance label
before an error occurs as long as `invalid` is set to false.

```jsx example
function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Blue', value: 'blue' },
  ]);

  return (
    <Toggle
      type="checkbox"
      title="Favorite colors"
      helpText="Blue surely isn't amongst your favorites?"
      invalid
      selected={selected}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
      ]}
    />
  );
}
```

In the next example, we'll take a closer look at one way to conditionally render
error and help messages. You should probably take this a step further and
implement your own error handler, but for the sake of the demo we've kept it
quite simple.

```jsx example
function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Blue', value: 'blue' },
  ]);

  const handleSelect = (entry) => {
    if (selected.some((e) => e.value === entry.value)) {
      return setSelected(selected.filter((s) => s.value !== entry.value));
    }

    return setSelected([...selected, entry]);
  };

  return (
    <Toggle
      type="checkbox"
      title="Favorite colors"
      helpText={
        selected.some((e) => e.value === 'blue')
          ? "Blue surely isn't amongst your favorites?"
          : 'Choose your favorite colors'
      }
      invalid={!!selected.some((e) => e.value === 'blue')}
      selected={selected}
      onChange={handleSelect}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
      ]}
    />
  );
}
```

# Toggle props

```props packages/toggle/src/component.tsx

```

```ts
type ToggleEntry = {
  label: string;
  value: unknown;
};
```