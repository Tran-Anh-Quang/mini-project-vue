<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

// muốn lấy được params dùng route
const route = useRoute();
const user = ref(null);

onMounted(() => {
  async function fetchUser() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`);
      user.value = await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

// Gọi hàm để lấy dữ liệu
  fetchUser();

})

</script>

<template>
  <main style="padding: 2rem">
    <div class="user-details">
      <h2>Thông tin chi tiết người dùng</h2>
      <div class="divider"></div>
      <div class="user-info">
        <p><strong>Tên:</strong> {{ user?.name }} </p>
        <p><strong>Tên đăng nhập:</strong> {{ user?.username }} </p>
        <p><strong>Email:</strong> {{ user?.email }} </p>
      </div>
      <div class="divider"></div>
      <div class="address-info">
        <h3>Địa chỉ</h3>
        <p><strong>Đường:</strong> {{ user?.address?.street }}} </p>
        <p><strong>Phòng:</strong> {{ user?.address?.suite }} </p>
        <p><strong>Thành phố:</strong> {{ user?.address?.city }} </p>
        <p><strong>Mã bưu điện:</strong> {{ user?.address?.zipcode }} </p>
        <p><strong>Tọa độ:</strong> {{ user?.address?.geo?.lat }}} </p>
      </div>
      <div class="divider"></div>
      <div class="contact-info">
        <h3>Liên hệ</h3>
        <p><strong>Điện thoại:</strong> {{ user?.phone }} </p>
        <p><strong>Trang web:</strong> {{ user?.website }} </p>
      </div>
      <div class="divider"></div>
      <div class="company-info">
        <h3>Công ty</h3>
        <p><strong>Tên công ty:</strong> {{ user?.company?.name }} </p>
        <p><strong>Khẩu hiệu:</strong> {{ user?.company?.catchPhrase }} </p>
        <p><strong>Mô tả:</strong> {{ user?.company?.bs }} </p>
      </div>
    </div>
  </main>
</template>

<style>
.user-details {
  width: 80%;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.user-details h2 {
  margin-top: 0;
}

.user-details p {
  margin-bottom: 10px;
}

.user-details strong {
  font-weight: bold;
}

.user-details h3 {
  margin-top: 20px;
}

.divider {
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
}

.user-info, .address-info, .contact-info, .company-info {
  margin-bottom: 20px;
}
</style>
