export const transactionData  = [
    {
        title: "nonce",
        description: "index, gets incremented every time transaction gets mined"
    }, 
    {
        title: "from",
        description: "the senders address"
    },
    {
        title: "to",
        description: "the receivers address address"
    },
    {
        title: "amount",
        description: "amount of tokens to transfer from sender to recipient"
    },
    {
        title: "gas limit",
        description: "maximum amount of gas units that can be consumed by an operation(Eg: transactions, signing..) on the network"
    },
    {
        title: "gas used",
        description: "the amount of gas units that was consumed for the operation"
    },
    {
        title: "base fee",
        description: "the amount in gwei(denomination of the ether token) for a single unit of gas. simply the price of gas"
    },
    {
        title: "priority fee (aka: minerTip)",
        description: "the maximum amount of gas to be included as a tip to the validator"
    },
    {
        title: "total gas fee",
        description: "the total amount of gas in gwei used for the operation"
    }, 
    {
        title: "max fee per gas",
        description: "the maximum amount of gas willing to be paid for the transaction (inclusive of Base Fee Per Gas and Priority Fee Per Gas)"
    }
]