// --- START OF FILE script.js ---

document.addEventListener('DOMContentLoaded', () => {
    const profilePopup = document.getElementById('profilePopup');
    const closeBtn = profilePopup.querySelector('.close-btn');
    const clickableNames = document.querySelectorAll('.clickable-name');
    const body = document.body;
    const pageContent = document.querySelector('.page-content');

    // Dữ liệu profile của các thành viên
    // Bạn có thể thêm URL ảnh thật vào trường 'image' khi có.
    const memberProfiles = {
        '1': { name: 'Lê Thị Hoài An', position: 'Tổ trưởng tổ 2', dob: '...', phone: '...', email: '...', image: '' },
        '2': { name: 'Đặng Thanh An', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '3': { name: 'Trần Thị Phương Anh', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '4': { name: 'Lưu Thành Đạt', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '5': { name: 'Nguyễn Hoàng Phong Đạt', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '6': { name: 'Bùi Dương Quang Đức', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '7': { name: 'Thái Doãn Hà', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '8': { name: 'Lê Ngọc Gia Hân', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '9': { name: 'Hoàng Trung Hiếu', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '10': { name: 'Trần Thị Ngọc Hoa', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '11': { name: 'Nguyễn Vũ Gia Hợp', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '12': { name: 'Nguyễn Hoàng Gia Huy', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '13': { name: 'Huỳnh Nguyễn Gia Huy', position: 'Trực cờ đỏ', dob: '...', phone: '...', email: '...', image: '' },
        '14': { name: 'Võ Trần An Huy', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '15': { name: 'Nguyễn Trần Tuấn Kiệt', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '16': { name: 'Nguyễn Khánh Linh', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '17': { name: 'Trương Thị Thùy Linh', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '18': { name: 'Thái Thanh Bảo Ngọc', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '19': { name: 'Hồ Nguyễn Châu Nguyên', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '20': { name: 'Hoàng Linh Như', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '21': { name: 'Nguyễn Thị Kim Ni', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '22': { name: 'Nguyễn Tiến Phát', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '23': { name: 'Đào Thanh Phong', position: 'Lớp phó học tập', dob: '...', phone: '...', email: '...', image: '' },
        '24': { name: 'Nguyễn Lê Quốc Phong', position: 'Tổ trưởng tổ 4', dob: '...', phone: '...', email: '...', image: '' },
        '25': { name: 'Nguyễn Lê Thiên Phong', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '26': { name: 'Nguyễn Việt Quốc', position: 'Lớp trưởng', dob: '...', phone: '...', email: '...', image: '' },
        '27': { name: 'Phan Hoàng Minh Quyên', position: 'Tổ trưởng tổ 1', dob: '...', phone: '...', email: '...', image: '' },
        '28': { name: 'Phạm Văn Sỹ', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '29': { name: 'Vũ Đình Tân', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '30': { name: 'Quách Phương Thảo', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '31': { name: 'Văn Phú Thiên', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '32': { name: 'Nguyễn Đinh Quang Thoại', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '33': { name: 'Trịnh Lưu Thi Thoại', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '34': { name: 'Lê Trung Tín', position: 'Trực cờ đỏ', dob: '...', phone: '...', email: '...', image: '' },
        '35': { name: 'Phạm Ái Như Trâm', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '36': { name: 'Lê Trần Bảo Trân', position: 'Tổ trưởng tổ 3', dob: '...', phone: '...', email: '...', image: '' },
        '37': { name: 'Võ Nguyễn Phương Trúc', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '38': { name: 'Trần Thái Tuấn', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '39': { name: 'Hồ Anh Tuấn', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '40': { name: 'Phan Hoàng Tuấn', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '41': { name: 'Nguyễn Thị Ánh Tuyết', position: 'Thành viên', dob: '...', phone: '...', email: '...', image: '' },
        '42': { name: 'Lê Hà Thái Uyên', position: 'Thư kí', dob: '...', phone: '...', email: '...', image: '' },
    };

    clickableNames.forEach(nameCell => {
        nameCell.addEventListener('click', () => {
            const memberId = nameCell.dataset.id;
            const memberData = memberProfiles[memberId];
            const currentPosition = nameCell.nextElementSibling.textContent; // Lấy chức vụ từ cột kế tiếp

            if (memberData) {
                document.getElementById('profileName').textContent = memberData.name;
                document.getElementById('profilePosition').textContent = currentPosition; // Sử dụng chức vụ từ bảng
                document.getElementById('profileDob').textContent = memberData.dob;
                document.getElementById('profilePhone').textContent = memberData.phone;
                document.getElementById('profileEmail').textContent = memberData.email;

                const profileImageContainer = profilePopup.querySelector('.profile-image-container');
                profileImageContainer.innerHTML = ''; // Xóa nội dung cũ

                if (memberData.image) {
                    const img = document.createElement('img');
                    img.src = memberData.image;
                    img.alt = `Ảnh của ${memberData.name}`;
                    profileImageContainer.appendChild(img);
                } else {
                    const placeholder = document.createElement('span');
                    placeholder.classList.add('placeholder-text');
                    placeholder.textContent = 'Chưa có ảnh';
                    profileImageContainer.appendChild(placeholder);
                }

                profilePopup.classList.add('visible');
                body.classList.add('profile-active'); // Thêm class để đẩy nội dung chính
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        profilePopup.classList.remove('visible');
        body.classList.remove('profile-active'); // Xóa class để nội dung chính trở lại
    });

    // Đóng popup khi nhấn Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && profilePopup.classList.contains('visible')) {
            profilePopup.classList.remove('visible');
            body.classList.remove('profile-active');
        }
    });
});

// --- END OF FILE script.js ---