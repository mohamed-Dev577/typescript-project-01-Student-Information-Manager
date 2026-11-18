# 🎓 Student Information Manager

نظام بسيط لإدارة بيانات الطلاب باستخدام **TypeScript**، يهدف إلى تطبيق المفاهيم الأساسية للغة TypeScript والتعامل مع البيانات المخزنة داخل Arrays وObjects.

## 📌 نبذة عن المشروع

يتيح المشروع التعامل مع بيانات الطلاب من خلال مجموعة من العمليات الأساسية، مثل إضافة الطلاب وتعديل بياناتهم والبحث عنهم وحذفهم، مع الاستفادة من نظام TypeScript للتحقق من أنواع البيانات وتنظيم بنية الكود.

## ✨ المميزات

- **إدارة بيانات الطلاب:** تخزين بيانات الطلاب باستخدام Objects.
- **إضافة الطلاب:** إضافة طلاب جدد إلى قائمة الطلاب.
- **تعديل البيانات:** تحديث بيانات طالب محدد باستخدام `map()`.
- **حذف الطلاب:** تصفية قائمة الطلاب باستخدام `filter()`.
- **البحث عن الطلاب:** البحث باستخدام رقم التعريف `ID` عبر `find()`.
- **عرض البيانات:** استخدام `console.table()` لعرض بيانات الطلاب في جدول منظم.
- **التحقق من أنواع البيانات:** استخدام TypeScript Interface لضمان توافق بيانات الطلاب مع البنية المحددة.

## 🛠️ التقنيات المستخدمة

- TypeScript
- JavaScript
- Node.js
- npm

## 📂 هيكل المشروع

```text
typescript-project-01-Student-Information-Manager/
│
├── src/
│   ├── data/
│   ├── types/
│   │   └── student.ts
│   ├── utils/
│   └── index.ts
│
├── dist/
├── node_modules/
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 🧠 المفاهيم البرمجية المطبقة

- TypeScript Interfaces
- Type Annotations
- Arrays & Objects
- Array Methods:
  - `push()`
  - `map()`
  - `filter()`
  - `find()`
- `for...of` Loop
- Functions
- Union Types
- Type Safety

## 🎯 الهدف التعليمي

تم تطوير هذا المشروع كجزء من سلسلة مشاريع TypeScript بهدف بناء أساس قوي في التعامل مع أنواع البيانات، وتن