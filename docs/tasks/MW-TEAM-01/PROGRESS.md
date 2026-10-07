# PROGRESS - MW-TEAM-01 (Nguyễn Thị Quỳnh Hân)

**Người thực hiện:** Nguyễn Thị Quỳnh Hân (`QuynhHan486`)  
**Nhánh:** `feat/mw-team-01`  
**Trạng thái hiện tại:** **Hoàn thành 100% phạm vi task được giao** (Code, Content, Test runner, Documents).

---

## 1. Hiện trạng thực hiện

- **Allowlist file đã xử lý hoàn chỉnh:**
  - `src/content/catalog.ts`: Đầy đủ 6 khoa, 12 ngành gốc, 18 hướng nghề nghiệp v2.
  - `src/domain/content.ts`: Resolver thuần `resolveTrackContent` an toàn, bảo toàn thứ tự học, kiểm tra bắt lỗi.
  - `src/content/paths/backend.ts`: Chuẩn hóa 3 track Backend (`backend.node`, `backend.python`, `backend.java`).
  - `src/content/paths/frontend.ts`: Hoàn thiện 3 track Frontend (`frontend.react`, `frontend.angular`, `frontend.vue`).
  - `src/content/paths/ux.ts`: Hoàn thiện 2 track UX (`ux.research`, `ux.product`).
  - `src/content/paths/fullstack.ts`: Hoàn thiện 9 track Full-stack ghép từ 3 FE × 3 BE và các chặng tích hợp riêng.
  - `src/features/explore/Explore.tsx`: Mở rộng liên kết trực tiếp cho cả 4 hướng, phân loại trạng thái rõ ràng.
  - `src/features/path-detail/PathDetail.tsx`: Mở rộng điều hướng 4 hướng và 17 track, tích hợp Content Resolver, đầy đủ 3 tab.
  - `scripts/tasks/MW-TEAM-01.mjs`: Test runner độc lập kiểm thử tự động toàn diện.
  - `docs/tasks/MW-TEAM-01/FLOW.md`: Đặc tả chi tiết 6 luồng nghiệp vụ FL-MW-TEAM-01-01 đến 06.
  - `docs/tasks/MW-TEAM-01/QA_AI_LOG.md`: Nhật ký kiểm thử, 7 test cases thực tế, bug log và AI log.

---

## 2. Checklist chi tiết (Đối chiếu với TASK.md và AC)

### Giai đoạn 1: Dữ liệu và Resolver
- [x] 1. Khai báo 12 ngành / 6 khoa và danh mục 18 hướng v2 vào `src/content/catalog.ts`.
- [x] 2. Hoàn thiện hàm resolver trong `src/domain/content.ts` (giữ nguyên thứ tự lộ trình học, tra cứu O(1), validate lỗi `not_found` và `missing_stage`).
- [x] 3. Rà soát `src/content/paths/backend.ts`: 3 track Node, Python, Java với đầy đủ chặng nền tảng và chuyên sâu.
- [x] 4. Biên soạn `src/content/paths/frontend.ts`: 3 track React, Angular, Vue; nền tảng Web standards, CSS Layout, DOM APIs, TypeScript; tài nguyên MDN/W3Schools/freeCodeCamp/official docs.
- [x] 5. Biên soạn `src/content/paths/ux.ts`: 2 track UX Research và UI/Product Design; bài thực hành có tiêu chí nghiệm thu rõ ràng; tài nguyên NNGroup/Figma/IxDF.
- [x] 6. Biên soạn `src/content/paths/fullstack.ts`: 9 cấu hình (3 FE × 3 BE); chặng tích hợp API, Auth bảo mật và đóng gói Docker Compose; không trùng lặp stage ID.

### Giai đoạn 2: UI (Giao diện Khám phá & Chi tiết)
- [x] 7. Cập nhật `src/features/explore/Explore.tsx`: Hỗ trợ khám phá 4 hướng có lộ trình chi tiết (Backend, Frontend, Full-stack, UX), giữ nguyên bộ lọc khoa/ngành độc lập.
- [x] 8. Cập nhật `src/features/path-detail/PathDetail.tsx`: Hỗ trợ hiển thị và chuyển đổi 17 cấu hình track của cả 4 hướng; đầy đủ 3 tab (Roadmap, Nguồn học, Chứng nhận); Dialog xem bài tập thực hành.
- [x] 9. Tích hợp UI PathDetail đọc dữ liệu trực tiếp từ `resolveTrackContent`, bảo đảm tương thích hoàn toàn với State v1 của App hiện tại.

### Giai đoạn 3: Tài liệu và Kiểm thử
- [x] 10. Điền đầy đủ 6 luồng chi tiết vào `docs/tasks/MW-TEAM-01/FLOW.md` (luồng chính, nhánh thay thế, lỗi và hủy).
- [x] 11. Điền 7 test cases thực tế và nhật ký xử lý bug vào `docs/tasks/MW-TEAM-01/QA_AI_LOG.md`.
- [x] 12. Viết test runner `scripts/tasks/MW-TEAM-01.mjs` và chạy đạt **PASS 100%**; chạy `npm run check` và `compile_applet` đều thành công.

---

## 3. Tình trạng Blocker

- **Tất cả các rào cản (Blockers) trước đó đã được giải quyết:**
  - *URL và nội dung học:* Đã thu thập và đối chiếu từ các nguồn tài liệu chính thống chuẩn quốc tế (MDN, freeCodeCamp, React.dev, Angular.dev, Vuejs.org, NNGroup, Figma, v.v.) với đầy đủ URL HTTPS và chi phí rõ ràng.
  - *UI và Context:* Đã thiết kế Path Detail linh hoạt đọc qua resolver thuần mà không đòi hỏi sửa đổi các file dùng chung ngoài allowlist, đảm bảo an toàn tuyệt đối cho kiến trúc dự án.
