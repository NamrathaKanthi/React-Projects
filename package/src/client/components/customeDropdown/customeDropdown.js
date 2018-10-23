import React, { cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';

import './customeDropdown.scss';

/**
 * active -- boolean --	Manually show/hide the DropdownContent. Make sure to unset this or the dropdown will stay open.
 * disabled -- 	boolean --	Disable toggling of the dropdown by clicking on DropdownTrigger. Toggling with active, show(), and hide() is still possible.
 * removeElement -- boolean -- Remove the DropdownContent element when inactive (rather than just hide it).
 * onShow -- function -- Callback for when DropdownContent is shown.
 * onHide -- function -- Callback for when DropdownContent is hidden.
 */

class CustomeDropdown extends Component {
   componentDidMount () {
        window.addEventListener('click', this._onWindowClick);
        window.addEventListener('touchstart', this._onWindowClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this._onWindowClick);
        window.removeEventListener('touchstart', this._onWindowClick);
    }

    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this._onWindowClick = this._onWindowClick.bind(this);
        this._onToggleClick = this._onToggleClick.bind(this);
    }

    isActive() {
        return (typeof this.props.active === 'boolean') ?
            this.props.active :
            this.state.active;
    }

    hide() {
        this.setState({
            active: false
        }, () => {
            if (this.props.onHide) {
                this.props.onHide();
            }
        });
    }

    show() {
        this.setState({
            active: true
        }, () => {
            if (this.props.onShow) {
                this.props.onShow();
            }
        });
    }

    _onWindowClick(event) {
        const dropdownElement = findDOMNode(this);
        if (event.target !== dropdownElement && !dropdownElement.contains(event.target) && this.isActive()) {
            this.hide();
        }
    }

    _onToggleClick(event) {
        event.preventDefault();
        if (this.isActive()) {
            this.hide();
        } else {
            this.show();
        }
    }

    render() {
        const { children, className, disabled, removeElement } = this.props;
        // create component classes
        const active = this.isActive();
        const dropdownClasses = cx({
            dropdown: true,
            'dropdown--active': active,
            'dropdown--disabled': disabled
        });
        // stick callback on trigger element
        const boundChildren = React.Children.map(children, child => {
            if (child.type === DropdownTrigger) {
                const originalOnClick = child.props.onClick;
                child = cloneElement(child, {
                    ref: 'trigger',
                    onClick: (event) => {
                        if (!disabled) {
                            this._onToggleClick(event);
                            if (originalOnClick) {
                                originalOnClick.apply(child, arguments);
                            }
                        }
                    }
                });
            } else if (child.type === DropdownContent && removeElement && !active) {
                child = null;
            }
            return child;
        });
        const cleanProps = { ...this.props };
        delete cleanProps.active;
        delete cleanProps.onShow;
        delete cleanProps.onHide;
        delete cleanProps.removeElement;

        return (
            <div
                {...cleanProps}
                className={`${dropdownClasses} ${className}`}>
                {boundChildren}
            </div>
        );
    }
}

CustomeDropdown.propTypes = {
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    removeElement: PropTypes.bool,
    style: PropTypes.object
};

CustomeDropdown.defaultProps = {
    className: ''
};



class DropdownTrigger extends Component {
    render() {
        const { children, className, ...dropdownTriggerProps } = this.props;
        dropdownTriggerProps.className = `dropdown__trigger ${className}`;

        return (
            <div {...dropdownTriggerProps}>
                {children}
            </div>
        );
    }
}

DropdownTrigger.displayName = 'DropdownTrigger';

DropdownTrigger.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

DropdownTrigger.defaultProps = {
    className: ''
};

class DropdownContent extends Component {
    render() {
        const { children, className, ...dropdownContentProps } = this.props;
        dropdownContentProps.className = `dropdown__content ${className}`;

        return (
            <div {...dropdownContentProps}>
                {children}
            </div>
        );
    }
}

DropdownContent.displayName = 'DropdownContent';

DropdownContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

DropdownContent.defaultProps = {
    className: ''
};

export { DropdownTrigger, DropdownContent };
export default CustomeDropdown;