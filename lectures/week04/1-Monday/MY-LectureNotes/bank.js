

class BankAccount {
    constructor(fullName, balance){
        this.fullName = fullName;
        this.balance = balance;
    }
    printAcctBal(){
        console.log(`${this.fullName} has a balance of $${this.balance}`);
    }
}


class Bank{
    constructor(name, bankAddress){
        this.name = name;
        this.bankAddress = bankAddress;
        this.acctHolders = [];
    }

    addAcctHolder(newAcctFullName, newBankAddress){
        let acctObj = new BankAccount(newAcctFullName, newBankAddress)
        this.acctHolders.push(acctObj)
    }
    searchAcctName(bankUser){
        if(bankUser == this.acctHolders.fullName){
            this.acctHolders.printAcctBal()
        } else {
            console.log(`There are no accounts under this name.`);
        }
    }
    displayAcctBalance(acctFullName){
        acctFullName.printAcctBal()
    }
    displayBankMembers(){
        for(let acctObj of this.acctHolders){
            console.log(acctObj.fullName);
        }
    }
    displayLargeBalances(){
        if (acctObj.balance >= 100000){
            acctObj.printAcctBal()
        }
    }

}

let blockchain = new Bank("Blockchain", "Decentralized Global Economy")
blockchain.addAcctHolder('EthanLehman', '0xF27')
blockchain.addAcctHolder('AddyLehman', '0x9ba7')
blockchain.searchAcctName('EthanLehman')
blockchain.displayAcctBalance('')