# NgxQrcodeGeneratorComponent

This is an Angular component that generates QR codes using the QRious library.

## Installation

To use this component, follow these steps:

1. Install the QRious library by running the following command:

   ```shell
   npm i ngx-qrcode-generator
   ```

2. Import the `NgxQrcodeGeneratorComponent` into your Angular module:

   ```typescript
   import { NgxQrcodeGeneratorComponent } from 'ngx-qrcode-generator';

   @NgModule({
     declarations: [NgxQrcodeGeneratorComponent],
     // ...
   })
   export class YourModule { }
   ```

3. Use the component in your Angular template:

   ```html
   <ngx-qrcode-generator
     [background]="'white'"
     [backgroundAlpha]="1.0"
     [foreground]="'black'"
     [foregroundAlpha]="1.0"
     [level]="'L'"
     [mime]="'image/png'"
     [padding]="null"
     [size]="100"
     [value]="'your-QR-code-value'"
     [canvas]="false"
   ></ngx-qrcode-generator>
   ```

## Usage

The `NgxQrcodeGeneratorComponent` has the following input properties:

- `background` (string, default: `'white'`): The background color of the QR code.
- `backgroundAlpha` (number, default: `1.0`): The opacity of the background color (0.0 to 1.0).
- `foreground` (string, default: `'black'`): The foreground color of the QR code.
- `foregroundAlpha` (number, default: `1.0`): The opacity of the foreground color (0.0 to 1.0).
- `level` (string, default: `'L'`): The error correction level of the QR code (`'L'`, `'M'`, `'Q'`, `'H'`).
- `mime` (string, default: `'image/png'`): The MIME type of the generated QR code image.
- `padding` (number or null, default: `null`): The padding around the QR code image (in pixels). Use `null` for default padding.
- `size` (number, default: `100`): The size of the QR code image (width and height).
- `value` (string): The value to encode as a QR code.
- `canvas` (boolean, default: `false`): Whether to render the QR code as a canvas element (`true`) or an image element (`false`).

## Example

Here is an example of using the `NgxQrcodeGeneratorComponent`:

```html
<ngx-qrcode-generator
  [value]="'https://example.com'"
  [size]="200"
  [foreground]="'#ff0000'"
  [background]="'#ffffff'"
></ngx-qrcode-generator>
```

In this example, a QR code is generated with the value `'https://example.com'`, size of `200` pixels, red foreground color (`'#ff0000'`), and white background color (`'#ffffff'`).

## Notes

- This component requires the QRious library to be installed.
- Make sure to import and declare the component in your Angular module.
- Customize the input properties to achieve the desired QR code appearance.
- The generated QR code can be rendered as either a canvas or an image element, depending on the `canvas` input property.