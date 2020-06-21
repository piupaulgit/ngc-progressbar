# ngc-progressbar

<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/ngc-progressbar"><img src="https://badge.fury.io/js/ngc-progressbar.svg" alt="NPM version"></a>

## Toc

- [Toc](#toc)
- [Online demo](#online-demo)
- [Installation](#installation)
- [How to use](#how-to-use)
- [types](#types)
- [Styles](#styles)

## Online demo

You can find a demo at <a href="https://stackblitz.com/edit/ngc-progressbar-example?file=src%2Fapp%2Fapp.component.html">stackblitz/</a>

## Installation

```
npm i ngc-progressbar
```

## How to use

Import ngc-progressbar to your app.module.ts, like this -

```
import { NgcProgressbarModule } from 'ngc-progressbar';
@NgModule({
    imports: [
        NgcProgressbarModule
    ]
})
```

Use in your component template like this -

```
<ngc-progressbar
    [type]="'circle'"
    [value]="10"
    id="progrebarOne">
</ngc-progressbar>
```

## types

There are two type of progressbar -

### Circle

```
<ngc-progressbar
    [type]="'circle'"
    [value]="10"
    id="progrebarOne">
</ngc-progressbar>
```

### Line

```
<ngc-progressbar
    [type]="'bar'"
    [value]="80"
    id="progrebarTwo">
</ngc-progressbar>
```

### Styles

For More enhancement on styles, create one object in the .ts file with respective css properties and pass that object as styles input, like this -

```
export class AppComponent {
  progressBarStyle1 = {
    // main canvas styling
    canvasBackground: '#f1f1f1',
    progressBarRadius: 100,

    // base bar styling
    baseStyles: {
      color: 'green',
      width: 40,
      style: 'round',
    },

    // parcentage bar stying
    barStyles: {
      color: '#fff',
      width: 30,
      style: 'round',
    },

    // text styling
    textStyles: {
      fontFamily: 'Arial',
      color: 'blue',
      fontSize: 30,
      position: 'center',
      html: '<span>text</span>',
    },
  };
}
```

```
<ngc-progressbar
    [type]="'circle'"
    [value]="10"
    id="progrebarOne"
    [styles]="progressBarStyle1">
</ngc-progressbar>
```

### License

The MIT License
