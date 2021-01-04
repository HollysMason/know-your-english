
class Api {

    data = {
        wordLists: [
            {
                name: 'List1',
                createdAt: '01.01.2020',
                learned: false
            },
            {
                name: 'List2',
                createdAt: '01.01.2020',
                learned: false
            },
        ],
        words: {
            List1: [
                {
                    en: 'go',
                    rus: 'идти',
                    repeated: 0,
                    learned: false,
                },
                {
                    en: 'tree',
                    rus: 'дерево',
                    repeated: 0,
                    learned: false,
                },
                {
                    en: 'action',
                    rus: 'действие',
                    repeated: 0,
                    learned: false,
                }
            ],
            List2: [
                {
                    en: 'state',
                    rus: 'состояние',
                    repeated: 0,
                    learned: false,
                },
                {
                    en: 'combine',
                    rus: 'коминировать',
                    repeated: 0,
                    learned: false,
                },
                {
                    en: 'application',
                    rus: 'приложение',
                    repeated: 0,
                    learned: false,
                }
            ]
        }
    }

    endpoints = {
        '/lists': this.data.wordLists,
    }

    randomDelay() {
        let rand = 0 + Math.random() * (3000 + 1 - 0);
        return Math.floor(rand);
    }

    get(url: string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // @ts-ignore
                const data = this.endpoints[url];

                if (data) {
                    resolve(data)
                } else {
                    reject('invalid endpoint');
                }

            }, this.randomDelay());
        });
    }

    getWords(listName: string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // @ts-ignore
                const data = this.data.words[listName];

                if (data) {
                    resolve(data)
                } else {
                    reject('invalid endpoint');
                }

            }, this.randomDelay());
        });
    }
}

export default new Api();