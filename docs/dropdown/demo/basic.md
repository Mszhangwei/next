# 基本

- order: 0

最简单的用法。

:::lang=en-us
# Basic

- order: 0

Basic usage.

:::
---

````jsx
import { Dropdown, Menu } from '@alifd/next';

const menu = (
    <Menu>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
        <Menu.Item>Option 4</Menu.Item>
    </Menu>
);

ReactDOM.render(
    <Dropdown trigger={<a>Hello dropdown</a>} afterOpen={() => console.log('after open')}>
        {menu}
    </Dropdown>, mountNode);
````
