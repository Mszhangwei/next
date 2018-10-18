'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Icon
 */
var Icon = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Icon, _Component);

    function Icon() {
        (0, _classCallCheck3.default)(this, Icon);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Icon.prototype.render = function render() {
        var _cx;

        var _props = this.props,
            prefix = _props.prefix,
            type = _props.type,
            size = _props.size,
            className = _props.className,
            other = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'type', 'size', 'className']);


        var classes = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'icon'] = true, _cx[prefix + 'icon-' + type] = !!type, _cx['' + prefix + size] = !!size, _cx[className] = !!className, _cx));
        return _react2.default.createElement('i', (0, _extends3.default)({}, other, { className: classes }));
    };

    return Icon;
}(_react.Component), _class.propTypes = {
    /**
    * 样式类名的品牌前缀
    */
    prefix: _propTypes2.default.string,
    /**
     * 指定显示哪种图标
     */
    type: _propTypes2.default.string,
    /**
     * 指定图标大小
     */
    size: _propTypes2.default.oneOf(['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl']),
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    size: 'medium'
}, _class._typeMark = 'icon', _temp);
Icon.displayName = 'Icon';
exports.default = _configProvider2.default.config(Icon);
module.exports = exports['default'];