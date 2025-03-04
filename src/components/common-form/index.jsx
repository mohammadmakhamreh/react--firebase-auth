import CommonInput from '../common-input';

const formElementTypes = {
    INPUT: 'input',
    SELEct: 'select',
    TEXTAREA: 'textarea'
}


function CommonForm({formControls = [], buttonText, formData, setFormData, onSubmit}) {
    
    
    function renderFormElement(getFormControl, getFormData) {
        let element = null;

        switch(getFormControl.componentType){
            case formElementTypes.INPUT:
                element = <CommonInput 
                type={getFormControl.type}
                placeholder={getFormControl.placeholder}
                value={getFormData.value}
                name={getFormControl.name}
                onChange={(event)=> setFormData({
                    ...formData,
                    [getFormControl.name]: event.target.value,
                })}/>
                break;

                default:
                    element = <CommonInput 
                    type={getFormControl.type}
                    placeholder={getFormControl.placeholder}
                    value={getFormData.value}
                    name={getFormControl.name}
                    onChange={(event)=> setFormData({
                        ...formData,
                        [getFormControl.name]: event.target.value,
                    })}/>
                    break;
        }

        return element;
    }


    
    return(
        <form onSubmit={onSubmit}>
            
            {
                formControls.map(singleFormControl => renderFormElement(singleFormControl, formData))
            }


            <button type="submit">{buttonText || 'Submit'}</button>
        </form>
    )
}

export default CommonForm;