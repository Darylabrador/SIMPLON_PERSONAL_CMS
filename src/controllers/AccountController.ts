class AccountController {
    public static getAccount(): any {
        const accountList = [
            { name: 'daryl'},
            { name: 'john'},
            { name: 'alix'},
        ];
        return accountList;
    }
}

export default AccountController;