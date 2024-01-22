import React from 'react';
import { Link } from 'react-router-dom';


const TopBar = () => {
  const topBarStyle = {
    background: 'white',
    color: 'black',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '40px',
    marginRight: '10px', 
  };

  const logoTextStyle = {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: 'black',
  };

  const menuStyle = {
    listStyle: 'none',
    display: 'flex',
  };

  const menuItemStyle = {
    marginLeft: '20px',
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <div style={topBarStyle}>
      <div style={logoContainerStyle}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8CAgECAgABAQEAAAABAQDz8/NjY2Kfn545OTlZWVnv7+/Gxsbm5uabm5u0tLTX19ZNTUwtLSz5+fkRERHg4OC9vb18fHs/Pz/p6emBgYGVlZWLi4pxcXAzMzNnZ2fPz88lJSRDQ0IbGxtaWlqnp6dSUlEPDw7CwsEnJyfXQXfAAAAHP0lEQVR4nO2di3qiMBCFqw4ixVvl4gWo1Ba17/+CS6JrL0xIhCCEzv9t13UlleNMcpIYwtMTQRAEQRAEQRAEQRAE8RfxwmXbp9AoQfQGAzv02j6PppjGPnD2mdv2uTSAd7bfc3HDwdDKHzbzWdsnpJlgsWHBGw1Go/yH/XMQpz1K1lnkXMKX/xlcHvJA+sm07RPTwzjdw0Xfd4WXZHUy85PVC+3TNT0vGXr7GYy4xiho+xRrMctWuQrrZ/C+PwBLVnMrZBq/cX2lsAy2Fya6h5fan6zJtKzRcGRZg9uDdf2v2yvsqEO2bfuE72QWHrglqMEqJERLg5LVjQ7/W89rpRPVw9u/8+PfkrTtE1djvExOl/T8lpJlWXr5L14hnYUByRruT/LmRZysh45359zJ4cTdQZCL4iz9StbPpLsVchm98s7nl6f/sniVp3zsEY7b1oKRJkyfUqTKX2Fd1mPWNY1u+Mw7n+o6Sl4ZslbnPQo6lKzu/KhufmqwCrlO2xZ2wVvu2NAWM4C73KJwcP5LX8IOdOfCBKq6g0Ic4WXerkOOs2fmDipV6656eHtgvYBde7Nzy/nVHWrZQ/lT3mVNzq00Osvd6631bCyG7IG5h714tEZ3+gG/p16aUjgYsm7A2+SRkwFuxtyvmbQUPM0Dudqlj5HnBXzoXjMs9x+cazzZ5wd0dabrymMHHe5xbHi63Ft8MHevbOK1D2bT5XFzFTLgM2d6e2f3wt1jN20kWYPY+TGx++h6ePuLucde+/dXbvrfHdpXeJkuX2mdLncXfGz0UHuQmgesYl3duS0fujcclvsPZmPIvY7p8nTtt+UOMrh71Jwu9842c/dGDaDOwXx2Lqo+vpplDuiZemnuYO4e67SaewSbts1PDeYeUSWFS5aeD0+8KgcD2FUVth0eVWoobKNqVTi4usLuWHz5U4rhX1bYnTykLK2s0BAohmKF3alpVA9JoUhhd/KQsrSyQkOokaVmjA8phmUKe18P+5+lxvBRSaE7MYewkkKCIDqHm07LEC7sXZYWS4VfHc1Ky031L5ZOnyUN9hr9CmgbS4odz+jbeZPX8nIr3aukZivWwxH3LyyABPsCKCku7PvxADBEo5HBpUcles/85YVWgd5acHXW1w8AYkpL6bJvgD3yfu4nSMaHFvhaF2Rsj4WvEX/Hw4J1sVwsXhj9/9fABknv8CRdEwigdVXm9kWqcAhJsdxOQaGDKFworHrUq9D9AEuSpRbExXIT+epTOCDN6dSXZWme3nrXRmWFpZa/PuIR+Mhn6l6vLxHHEGCOvd/x5+Kd4ntW7W0L8filroIhMb8MBDL0k+EXqI8EA1fGM9rqp3yBmWAJCC+30b042p2vTj5btIeM4uDk+wdB93764vsnQId8AL7/Fgksf5nkvxTQ8SEr9540s35vgwYRYFJeLMSDD0fJ27mCcqvmVic66Mo9QVX6YoG5d17uRdItmeG9DFg1t3r/LyjEWnwlhUiLr6QQcQuKYR0cQUujoBArp6IQbWmaVIi5hZJCzC1UFGJuQVlaA8pSAUZlaf9j2P96SI6PYlQM+6+QshTFqBiSW6AYFUOqhyjCGErm5cktGoCyVIBRMey/W9D4EMWoGPbfLShLUf5wlnbRLcjxUYyKYf8V6m1pFNzi4S0NuQUKuYWIHriFQj0kt9DMX1BIfRoUo2LYf7cgx0cxqtfW/3rYf4XkFihGxZDcAsUot9CbpV2cEaYsRTEqS/sfw/67BTk+ilEx7L9bUJaiGJWl5BYoBsVw89h6uH1wPdwuZ6+CGMZBINz9wQ2CuSCGh2Ug3vzBC4KpIIafi6CBaywDfiGwhSm8XJcboU3/eMJfHGIK+V7ctiAeoXMtV1TIy73qvpmwu7lceYxl6eWGd7DDcm7HXypmGv/DX3tDo7/4KlcsyyWe8A01KhPLrlbPA4l8qgFyy4GfD+hWDE/jjWzHAQtetW79wXaNkICeaiTf8k20a4S0nPZdI6R7juG7RshvHSPYNUK6m5nmXSOepTeAGMKuWE4lhtiuEWdfIYZ629NIoR6mxWIzaT0E7IN58pxrs11SDx2tAp/GR8leQbldYDU/GsqKOajLnN9l5T5TvQqftrvy93QytGnzFk75ie4EuTa1y8vZugXmjN0yhEO98mLie6h45eU6dJNSgiBq4Wb2swFUvxXrVu6BHaHi5nRsFzpRB6a0m/Logy14rxbF4GTKnux4z0/On9gLuv8KO5OHkqcUwxKFZoDP9cgZ7wHQ6YPO7cmODr5VCA5tO7kq6JaNShKjg2MAe92TwwRBEHXx5qu22/467OXjqF3b51gT6fbCocJXIp3r03x7BSCRzKTGxnRGBcC75K4JO+jIcKHqwQAShTG62sKgpzCQKuxeWO6LISk0P0tl9TBSuO1Ct2O4Qu8G88XUN9ouLMGynl9BNJqD/CZC08Q2lz26mOA33thgFPQRBEEQBEEQBEEQBEF0kn9gVAa5Vlk8KQAAAABJRU5ErkJggg==" alt="Logo" style={logoStyle} />
        <Link to="/" style={logoTextStyle}>
          Fries Bank
        </Link>
      </div>
      <ul style={menuStyle}>
        <li>
          <Link to="/" style={menuItemStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={menuItemStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={menuItemStyle}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/stocks" style={menuItemStyle}>
            Stocks
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;

