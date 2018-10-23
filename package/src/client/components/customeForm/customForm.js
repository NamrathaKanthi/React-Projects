import React, { Component } from 'react';
import CustomeInput from '../../components/customeInput/customeInput';
import CustomeDropdown, { DropdownTrigger, DropdownContent } from '../../components/customeDropdown/customeDropdown';
import CustomButton from '../../components/customButton/customButton';
import CustomSelect from '../../components/customSelect/customSelect';
import './customForm.scss';

export default class CustomForm extends Component {
  constructor(props) {
    super(props)
    this.getBlockComponent = this.getBlockComponent.bind(this);
    this.keyindex = 0;
  }

  onInputChange(obj, value) {
    obj.value = value
    this.props.onChange && (this.props.onChange(obj, this.props.formObjects))
  }

  getBlockComponent(obj) {
    this.keyindex++;
    switch (obj.type) {
      case 'text':
      case 'number':
      case 'email':
      case 'password':
      case 'textarea':
      case 'tel':
        return <CustomeInput
          key={this.keyindex}
          type={obj.type}
          value={obj.value}
          onChange={(value) => { this.onInputChange(obj, value) }}
          disabled={obj.disabled}
          label={obj.label} />
      case 'button':
        return <CustomButton
          key={this.keyindex}
          type={obj.type}
          value={obj.value}
          disabled={obj.disabled}
          label={obj.label} />
      case 'select':
        return <CustomSelect
          key={this.keyindex}
          type={obj.type}
          value={obj.value}
          disabled={obj.disabled}
          label={obj.label} />
      default:
        return <div className='no_block_type' />
    }
  }

  render() {
    return (
      <div className='blocks_loop'>
        {this.props.formObjects.name}
        {this.props.formObjects.fields.map((formObj) => this.getBlockComponent(formObj))}
      </div>
    )
  }
}



//export { Input, Select, Textarea, Number };