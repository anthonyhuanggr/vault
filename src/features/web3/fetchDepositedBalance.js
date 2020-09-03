export const fetchDepositedBalance = async ({address, contract}) => {
  // console.log(`=====================================fetchDepositedBalance begin=====================================`)
  // console.log(`
  //   address:${address}\n
  //   contractAddress:${contractAddress}\n
  // `)
  const depositedBalance = await contract.methods.balance(address).call({ from: address });

  // console.log(`=====================================fetchDepositedBalance success=====================================`)

  return depositedBalance;
}