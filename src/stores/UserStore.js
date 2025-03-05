import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";


export const useUserStore = defineStore('users', () => {
    const route = useRoute();
    const txtSearch = ref('');
    const users = ref([
        {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: '1iL0K@example.com',
        phone: '1-770-736-8031 x56442',
        },
        {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'VZGd1@example.com',
        phone: '010-692-6593 x09125',
        },
    ]);

    const handleTxtSearch = (value) => {
        txtSearch.value = value;
    };

    const handleCreateUser = (user) => {
        users.value.push(user);
    };

    const handleDeleteUser = (id) => {
        users.value = users.value.filter(item => item.id !== id);
    };

    const handleUpdateUser = (user) => {
        const index = users.value.findIndex(item => item.id == user.id);
        users.value[index].email = user.email;
        users.value[index].name = user.name;
        users.value[index].phone = user.phone;
    };

    const userDetails = computed(() => {
        return users.value.find(item => item.id == route.params.id);
    })

    const filterUser = computed(() => {
        return users.value.filter(
            item => item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1
                || item.email.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1);
    });

    return {
        users,
        txtSearch,
        filterUser,
        userDetails,
        handleCreateUser,
        handleDeleteUser,
        handleUpdateUser,
        handleTxtSearch
    };
});