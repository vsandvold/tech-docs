### Import

```js
import { Card } from '@warp-ds/react';
```

### Props

<api-table type=react component="Card" />

### DeadToggle props

<api-table type=react component="DeadToggle" />

### Code

The `<Card>` component takes any set of JSX elements as its children.


```jsx example
<Card>
  <img
    className="h-128 w-full object-cover"
    src="https://source.unsplash.com/random/400x400"
    alt="Description"
  />
  <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
    Ukens bolig
  </p>
  <div className="p-16">
    <p className="text-12 text-gray-300">DNB Eiendom</p>
    <p>
      Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a.
      vv/fyring.
    </p>
    <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
    <p className="font-bold my-8">
      52 m
      <span
        style={{
          fontSize: 10,
          verticalAlign: 'super',
          marginRight: 5,
        }}
      >
        2
      </span>
      Totalpris: 4 869 039 kr
    </p>
    <p className="text-14 text-gray-400 mb-0">
      Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
      <span className="text-gray-200">•</span> 2 soverom
    </p>
  </div>
</Card>
```

### Selecting

You can mark a Card as selected by passing the `selected` property. This will add an outline to indicate the selected state.

Try clicking one of the cards below and watch them all get selected at once.

```jsx example
function Example() {
  const [selected, setSelected] = React.useState(false);

  return (
    <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32">
      <Card selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/400x400"
          alt="Description"
        />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
          Ukens bolig
        </p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            <Clickable checkbox onClick={() => setSelected(!selected)}>
              Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
              bl.a. vv/fyring.
            </Clickable>
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/403x403"
          alt="Description"
        />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            <Clickable checkbox onClick={() => setSelected(!selected)}>
              Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
              bl.a. vv/fyring.
            </Clickable>
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/404x404"
          alt="Description"
        />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            <Clickable checkbox onClick={() => setSelected(!selected)}>
              Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
              bl.a. vv/fyring.
            </Clickable>
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
    </div>
  );
}
```

### Anchor Cards

Keep in mind that if you wish to make the Card a clickable anchor card, you must add a div as the very first element with the attribute aria-owns set to the id of the title element. In this example we set it to the id of title and assign the h3 this id.

You should follow these semantics, but styling is up to you.

```jsx example
<Card>
  <div aria-owns="title"></div>
  ...
  <h3 id="title">
    <Clickable href="..." title="content">
      content
    </Clickable>
  </h3>
  ...
</Card>
```

Here's the full code example:

```jsx example
<Card>
  <div aria-owns="title_id"></div>
  <img
    className="h-128 w-full object-cover"
    src="https://source.unsplash.com/random/400x400"
    alt="Description"
  />
  <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
    Ukens bolig
  </p>
  <div className="p-16">
    <p className="text-12 text-gray-300">DNB Eiendom</p>
    <h3 className="text-16 font-normal text-gray-800" id="title_id">
      <Clickable
        href="//finn.no"
        target="_blank"
        title="Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."
        className="text-current hover:no-underline focus:no-underline"
      >
        Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a.
        vv/fyring.
      </Clickable>
    </h3>
    <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
    <p className="font-bold my-8">
      52 m
      <span
        style={{
          fontSize: 10,
          verticalAlign: 'super',
          marginRight: 5,
        }}
      >
        2
      </span>
      Totalpris: 4 869 039 kr
    </p>
    <p className="text-14 text-gray-400 mb-0">
      Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
      <span className="text-gray-200">•</span> 2 soverom
    </p>
  </div>
</Card>
```

### Toggles inside of Cards

Using Toggles([Radios](/components/radio/) or [Checkboxes](/components/checkbox/)) inside of cards has the limitation of only being able to pass forward a label. If you wish to further enhance the look and feel of these you must use the DeadToggle helper component, which we cover a bit further down.

```jsx example
function Example() {
  const [checked, setChecked] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  return (
    <div>
      <Card selected={checked} className="mt-32 w-max p-24 flex items-center">
        <DeadToggle checkbox checked={checked} className="-mt-8" />
        <Clickable
          checkbox
          labelClassName="ml-12"
          onClick={() => setChecked(!checked)}
        >
          Checkbox in a card
        </Clickable>
      </Card>

      <div className="flex gap-32 mt-32">
        <Card selected={selected === 'a'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected === 'a'} className="-mt-8" />
          <Clickable
            radio
            labelClassName="ml-12"
            name="gfdhjk2"
            onClick={() => setSelected('a')}
          >
            Radio in a card - A
          </Clickable>
        </Card>
        <Card selected={selected === 'b'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected === 'b'} className="-mt-8" />
          <Clickable
            radio
            labelClassName="ml-12"
            name="gfdhjk2"
            onClick={() => setSelected('b')}
          >
            Radio in a card - B
          </Clickable>
        </Card>
      </div>
    </div>
  );
}
```

### Using the DeadToggle and Clickable helper component

First we must import the necessary helper components:

```jsx example
import { Clickable, DeadToggle } from '@warp-ds/react';
```

By using the DeadToggle and Clickable helper components, we can utilize the UI of the Toggle, whilst being able to style the card however we want.

```jsx example
function Example() {
  const [selected, setSelected] = React.useState('');

  return (
    <div className="flex">
      <Card
        flat
        className="py-12 px-16 w-max flex items-center"
        selected={selected === 'a'}
      >
        <DeadToggle radio checked={selected === 'a'} className="-mt-6" />
        <div className="ml-16">
          <h4 className="mb-0">
            <Clickable radio name="purchase" onClick={() => setSelected('a')}>
              Purchase foo
            </Clickable>
          </h4>
          <p className="mb-0 text-14">520 kr/mnd</p>
        </div>
      </Card>
      <Card
        flat
        className="py-12 px-16 w-max ml-20 flex items-center"
        selected={selected === 'b'}
      >
        <DeadToggle radio checked={selected === 'b'} className="-mt-6" />
        <div className="ml-16">
          <h4 className="mb-0">
            <Clickable radio name="purchase" onClick={() => setSelected('b')}>
              Purchase bar
            </Clickable>
          </h4>
          <p className="mb-0 text-14">124 kr/mnd</p>
        </div>
      </Card>
    </div>
  );
}
```

**Note** the `className="-mb-4"` on the Toggle component. This removes the `margin-bottom` that follows the component.

