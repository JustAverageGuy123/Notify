# Preview

![image](https://github.com/user-attachments/assets/365d17b1-e19d-474b-8cc7-80dbfc0ad059)

# Simple Notify

Notify Script With Animated Icons

## Installation

See Below On How To Install This Correctly


```diff
Resources:

Firstly Drag The Script And Put It Into Resources And Ensure it with Your Server.CFG
```
```diff
Now Head To:

\ resources \ [qb] \ qb-core \ client, And Locate Reference Below ↓
```
## Snippet
```diff
function QBCore.Functions.Notify(text, texttype, length, icon)
    local message = {
        action = 'notify',
        type = texttype or 'primary',
        length = length or 5000,
    }

    if type(text) == 'table' then
        message.text = text.text or 'Placeholder'
        message.caption = text.caption or 'Placeholder'
    else
        message.text = text
    end

    if icon then
        message.icon = icon
    end

    SendNUIMessage(message)
end
```
![image](https://github.com/user-attachments/assets/4a3470ed-2d3d-4a54-a732-e93ec0bf7432)

```diff
Now Once Found Replace It With Below Snippet At Lines 155 To Line 174:

Reference Below ↓
```
![image](https://github.com/user-attachments/assets/49e4d020-e451-4b68-8163-4eb99597f29e)

## Snippet
```diff
function QBCore.Functions.Notify(text, texttype, length)
    exports['notify']:Notify(text, texttype, length)
end
```
##
```diff
Happy Days Now It Is Installed Enjoy :)
```
