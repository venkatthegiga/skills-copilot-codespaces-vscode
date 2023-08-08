function skillsMember() {
    return [
        {
            name: 'member',
            type: 'input',
            message: 'Enter the name of the member',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter the name of the member';
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter the id of the member',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter the id of the member';
                }
            }
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter the email of the member',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter the email of the member';
                }
            }
        },
        {
            name: 'github',
            type: 'input',
            message: 'Enter the github of the member',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter the github of the member';
                }
            }
        },
        {
            name: 'school',
            type: 'input',
            message: 'Enter the school of the member',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter the school of the member';
                }
            }
        },
        {
            name: 'anotherMember',
            type: 'confirm',
            message: 'Do you want to add another member?',
            default: false
        }
    ]
}   