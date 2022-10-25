import Form from '.';

export default{
    title:'Main/Form',
    component:Form
}

const Template = (args) => <Form {...args}/>


export const AddTransaction = Template.bind({});
AddTransaction.args = {
    handleSubmit:()=>{}
}