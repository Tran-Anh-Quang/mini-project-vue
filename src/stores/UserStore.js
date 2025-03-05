import {defineStore} from "pinia";
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";


export const useUserStore = defineStore('users', () => {
    const route = useRoute();
    const txtSearch = ref('');
    const users = ref([]);

    onMounted(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                users.value = await response.json();
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        // Gọi hàm để lấy dữ liệu
        fetchUsers();

    })

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