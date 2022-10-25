import Button from '.';

export default{
    title:'Main/Form/Button',
    component:Button
}

const Template = (args) => <Button {...args}>Add</Button>


export const AddTransaction = Template.bind({});
AddTransaction.args = {
    handleClick:()=>{
        console.log('clicked')
    }
}