import Transactions from "."

export default{
    title:'Main/Transactions',
    component:Transactions
}

const Template = (args) => <Transactions {...args} />


export const Income = Template.bind({});
Income.args = {
    transactions:[{
        value:'income',
        date:312321312321
    }]
}