# convert-units

Handles the conversion from one unit measurement to another for the following units:
* px
* rem
* vw
* vh
# Usage
## Main Method
ConvertUnits.convertTo
### Parameters
* unit - the unit to be converted to
* textValue - the value to be converted
---
Example: 
```
ConvertUnits.convertTo( 'vh', '50vw');
```
## Additional Methods
* ConvertUnits.convertToPx
* ConvertUnits.convertToRem
* ConvertUnits.convertToVw
* ConvertUnits.convertToVh
### Parameters
* textValue - the value to be converted
---
Example: 
```
ConvertUnits.convertToVh('50vw');
```
