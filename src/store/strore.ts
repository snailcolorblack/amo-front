import {defineStore} from 'pinia'
import {ref} from 'vue';
import type {DropdownType} from "../types/types";


export const useTestAmoStore = defineStore('dropdown', {
    state: () => {
        return {
            dropdownItem: ref({label: 'Не выбрано', value: ''} as DropdownType),
            amoResponse: ref([]),
            accesToken: ref('')
        }
    },
    actions: {
        updateDropdownValue(item: DropdownType) {
            this.dropdownItem.label = String(item.label);
            this.dropdownItem.value = String(item.value);
        },

        updateAmoResponse(item: any) {
            this.amoResponse = item;
        },

        updateToken(item: any) {
                this.accesToken = item
        }

        // async createEntity() {
        //     const serviceMethod: { [key: string]: () => Promise<unknown> } = {
        //         deal: async () => await getAmoDeals(String(sessionStorage.getItem('access_token'))),
        //         contact: async () => await getAmoContacts(String(sessionStorage.getItem('access_token'))),
        //         company: async () => await getAmoCompanies(String(sessionStorage.getItem('access_token'))),
        //     };
        //     this.updateAmoResponse(await serviceMethod[this.dropdownItem.value as string]() as AmoResponseType);
        // },
    },
});