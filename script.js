/* ================================================================
   الإعدادات — عدّل هذه القيم
   ================================================================ */

// 1) رقم الواتساب الخاص بك بصيغة دولية بدون + أو مسافات
//    مثال: للرقم ‎+1 234 567 8900 استخدم "12345678900"
const WHATSAPP_NUMBER = "+963998450166";

// 2) الفئات الرئيسية — كل فئة تحتوي على "أفرع" (أقسام فرعية). عند الضغط على الفئة الرئيسية
//    تظهر بطاقات الأفرع، وعند الضغط على فرع تظهر منتجاته فقط.
//    ملاحظة: حقل "category" و "sub" في كل منتج داخل PRODUCTS يجب أن يطابقا id الفئة والفرع هنا.
function catImg(bg, txt){
  return "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23"+bg+"%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23"+ (bg==="f4f6fa"?"1c2260":"f4f6fa") +"%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3E"+encodeURIComponent(txt)+"%3C/text%3E%3C/svg%3E";
}

const CATEGORIES = [
  {
    "id": "coffee-cups",
    "name": "كاسات  وأغطية",
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231c2260%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ECoffee%20Cups%3C/text%3E%3C/svg%3E",
    "subcategories": [
      {
        "id": "with-lid",
        "name": "أكواب بغطاء",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231c2260%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EWith%20Lid%3C/text%3E%3C/svg%3E"
      },
      {
        "id": "no-lid",
        "name": "أكواب بدون غطاء",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2333418f%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ENo%20Lid%3C/text%3E%3C/svg%3E"
      },
      {
        "id": "lid",
        "name": " غطاء",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2333418f%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ENo%20Lid%3C/text%3E%3C/svg%3E"
      } 
    ]
  },
  {
    "id": "clean",
    "name": "أدوات تنظيف",
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2333418f%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EMugs%3C/text%3E%3C/svg%3E",
    "subcategories": [
     
      {
        "id": "lefa",
        "name": " ليّف وسيّف",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2333418f%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EBags%3C/text%3E%3C/svg%3E"
      },
      {
        "id": "mamaseh",
        "name": "مماسح ",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2333418f%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EBags%3C/text%3E%3C/svg%3E"
      },
       {
        "id": "plastic clean",
        "name": "مساحات وفراشي",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2333418f%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EBags%3C/text%3E%3C/svg%3E"
      },
    ]
  },
  {
    "id": "bags",
    "name": "أكياس",
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234a7fc4%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ETea%20Glasses%3C/text%3E%3C/svg%3E",
    "subcategories": [
      {
        "id": "bags",
        "name": "أكياس قمامة",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2333418f%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EBags%3C/text%3E%3C/svg%3E"
      },
      {
        "id": "gift_bags",
        "name": "أكياس هدايا",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234a7fc4%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ETea%20Glasses%3C/text%3E%3C/svg%3E"
      },
      {
        "id": "healthy_bags",
        "name": " أكياس غذائية ",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234a7fc4%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ETea%20Glasses%3C/text%3E%3C/svg%3E"
      },
       {
        "id": "0_bags",
        "name": " أكياس نايلون ",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234a7fc4%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ETea%20Glasses%3C/text%3E%3C/svg%3E"
      }
    ]
  },
  {
    "id": "wrapping",
    "name": "تغليف",
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234a7fc4%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EWrapping%3C/text%3E%3C/svg%3E",
    "subcategories": [
      {
        "id": "cling-wrap",
        "name": "نايلون لاصق",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234a7fc4%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ECling%20Wrap%3C/text%3E%3C/svg%3E"
      },
      {
        "id": "rolls-paper",
        "name": " ورق وقصدير",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231c2260%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ERolls%20%26%20Paper%3C/text%3E%3C/svg%3E"
      },
      {
        "id": "rubber-bands",
        "name": "مطاط وخيوط",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234a7fc4%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ERubber%20Bands%3C/text%3E%3C/svg%3E"
      }
      
    ]
  },
  {
    "id": "plastic",
    "name": "أدوات بلاستيكية",
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2333418f%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EPlastic%20Ware%3C/text%3E%3C/svg%3E",
    "subcategories": [
      {
        "id": "tumblers",
        "name": "شيلمون",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2333418f%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ETumblers%3C/text%3E%3C/svg%3E"
      },
       {
        "id": "golves",
        "name": "قفازات وطواقي",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2333418f%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ETumblers%3C/text%3E%3C/svg%3E"
      },
      
      {
        "id": "containers",
        "name": "علب",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234a7fc4%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EContainers%3C/text%3E%3C/svg%3E"
      },
      {
        "id": "cutlery",
        "name": "أدوات مائدة",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2333418f%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ECutlery%3C/text%3E%3C/svg%3E"
      },
     
    ]
  },
  {
   "id": "bool",
    "name": "  صحون ومناسف",
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234a7fc4%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EWrapping%3C/text%3E%3C/svg%3E",
    "subcategories": [
     {
        "id": "plates",
        "name": "صحون",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231c2260%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EPlates%3C/text%3E%3C/svg%3E"
      },
      {
        "id": "mnsaf",
        "name": " مناسف",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231c2260%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ERolls%20%26%20Paper%3C/text%3E%3C/svg%3E"
      },
       
      
    ]
  
},
{
   "id": "diapers",
    "name": " حفاظات ومحارم",
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234a7fc4%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3EWrapping%3C/text%3E%3C/svg%3E",
    "subcategories": [
      {
        "id": "diapers-baby",
        "name": "حفاظات أطفال",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234a7fc4%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ECling%20Wrap%3C/text%3E%3C/svg%3E"
      },
      {
        "id": "diapers-womens",
        "name": "حفاظات نسائية",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231c2260%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ERolls%20%26%20Paper%3C/text%3E%3C/svg%3E"
      },
       {
        "id": "tissues",
        "name": "مناديل ",
        "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22300%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231c2260%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f4f6fa%22%20font-family%3D%22Tajawal%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2226%22%3ERolls%20%26%20Paper%3C/text%3E%3C/svg%3E"
      },
      
    ]
  
}
];

// 3) المنتجات — سهلة التعديل: أضف أو احذف أو غيّر الاسم/السعر/الصورة/الوصف
//
// ========================================================================
// ★★★ تعديل (جديد كبير) — حقل "variants": أزرار مخصصة بعدد غير محدود ★★★
// ========================================================================
// أضف لأي منتج حقل variants (مصفوفة) ليظهر بصفحة/نافذة هذا المنتج أي عدد
// تريده من الأزرار (غطاء فقط، دزينة، طرد، مقاس 9، مقاس 6، مقاس 4، ...)،
// كل زر بسعره وصورته الخاصة به بشكل مستقل تمامًا. مثال جاهز موجود على
// المنتج p1 تحت — انسخه وعدّل عليه بحرية.
//
// كل عنصر بمصفوفة variants هو زر واحد وله 4 حقول:
//   id    → معرّف داخلي فريد للزر (احرف/أرقام إنجليزية بدون فراغات، لا تكرره
//           داخل نفس المنتج) — يُستخدم لتمييز سطر هذا الخيار بالسلة.
//   name  → النص الظاهر على الزر نفسه بصفحة المنتج (عدّله كيفما تريد).
//   price → السعر الكامل لهذا الزر (سعر القطعة بهذا الخيار تحديدًا، وليس
//           زيادة إضافية فوق سعر المنتج الأساسي).
//   image → (اختياري) اسم ملف الصورة التي تظهر بالنافذة عند اختيار هذا
//           الزر تحديدًا. احذف هذا الحقل إن أردت إبقاء صورة المنتج
//           الأساسية (image) نفسها لكل الأزرار.
//
// ملاحظات مهمة:
// - أول عنصر بالمصفوفة = الخيار المختار تلقائيًا عند فتح نافذة المنتج.
// - إذا وضعت variants لمنتج معيّن، تصبح هي المصدر الوحيد لأزرار هذا
//   المنتج، وتتجاهل تلقائيًا الحقول القديمة (lidSurcharge/imageWithLid/
//   imageNoLid/lidNoLabel/lidWithLabel) الموصوفة بالأسفل لهذا المنتج بس.
// - أي منتج لم تضف له variants يستمر يعمل تمامًا كما كان (نظام "بدون
//   غطاء / مع غطاء" القديم بالأسفل) دون أي تغيير عليه.
// - منتج بخيار واحد بس بمصفوفة variants (عنصر واحد فقط) → لا تظهر له
//   أزرار اختيار إطلاقًا بنافذته (تمامًا مثل hasLidOption:false).
//
// ===== ملاحظة — حقول اختيارية إضافية (نظام "الغطاء" القديم) لكل منتج: =====
//
// 1) lidSurcharge  → زيادة سعر "مع غطاء" الخاصة بهذا المنتج فقط.
//    - إذا حطيته على منتج معيّن (مثال: lidSurcharge: 3.5) رح يُستخدم
//      لهذا المنتج بس، وباقي المنتجات ما تتأثر إطلاقًا.
//    - إذا ما حطيته على منتج (تركته بدون هالحقل) رح يُستخدم الرقم
//      الافتراضي DEFAULT_LID_SURCHARGE (تلاقيه تحت بقسم "إعدادات خيار
//      الغطاء" بعد نهاية هذه المصفوفة).
//
// 2) overlay  → هل تظهر خلفية غامقة (Overlay) خلف نافذة تفاصيل هذا
//    المنتج تحديدًا عند فتحها؟
//    - overlay: true  (أو حذف الحقل تمامًا) → تظهر الخلفية الغامقة (الوضع الافتراضي).
//    - overlay: false → ما تظهر أي خلفية غامقة لهذا المنتج بس.
//    - هذا الخيار خاص فقط بنافذة المنتج (Product Modal) الفل-سكرين،
//      وما إله علاقة بخيار "الغطاء/بدون غطاء" (Lid) يلي جوا النافذة.
//
// 3) hasLidOption  → هل يظهر خيار "الغطاء" (القائمة المنسدلة بدون
//    غطاء/مع غطاء) أصلًا داخل نافذة هذا المنتج؟ للمنتجات يلي مش أكواب
//    (مثال: مطاط، أدوات بلاستيكية، إلخ) يفضل إخفاء هذا الخيار نهائيًا.
//    - hasLidOption: true  (أو حذف الحقل تمامًا) → يظهر خيار الغطاء (الوضع الافتراضي).
//    - hasLidOption: false → يختفي خيار الغطاء بالكامل لهذا المنتج بس،
//      وتلقائيًا يُحتسب سعره بدون أي زيادة غطاء (كأنه دائمًا "بدون غطاء").
//
// 4) lidNoLabel / lidWithLabel  → تغيير نص خياري القائمة المنسدلة نفسها
//    لهذا المنتج بس (بدون ما يتغير النص بباقي المنتجات).
//    - lidNoLabel   → النص البديل لخيار "بدون غطاء" (مثال: "بدون كفر").
//    - lidWithLabel → النص البديل لخيار "مع غطاء" (مثال: "مع كفر خشب").
//    - إذا ما حطيت أي منهم، يبقى النص الافتراضي "بدون غطاء" / "مع غطاء
//      (+ زيادة على السعر)" كما هو.
//    ⚠️ ملاحظة: هذا يغيّر النص الظاهر فقط، مش القيمة الداخلية (value)
//    المستخدمة بحساب السعر — تلك تبقى دائمًا "no-lid" / "with-lid".
//
const PRODUCTS = [
  {
    "id": "p1",
    "name": "كاسة قهوة مع غطاء",
    "category": "coffee-cups",
    "sub": "with-lid",
    "price": 8.99,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "1.jpg",
    "badge": "",
    "overlay": false,
    // ★ مثال حي على نظام "variantGroups" (المجموعات القابلة للدمج) — راجع
    // الشرح الكامل فوق تعريف دالة getVariantGroups() بالجافاسكربت (ابحث
    // عن كلمة "variantGroups"). العميل هون يقدر يختار زر واحد من كل
    // مجموعة بنفس الوقت (مثال: بدون غطاء + مقاس 4 + قطعة مفردة).
    "variantGroups": [
     /* {
        // مجموعة 1: الغطاء — "price" هون فرق (زيادة) يُضاف فوق سعر
        // المقاس المختار بمجموعة "size" تحتها، وليس سعرًا كاملًا مستقلًا.
        // "غطاء فقط" استثناء: عليها override:true لأنها منتج مستقل تمامًا
        // (شراء غطاء لوحده) وسعرها لا علاقة له بالمقاس المختار.
        "id": "lid",
        "name": "الغطاء",
        "options": [
          { "id": "no-lid",   "name": "بدون غطاء", "price": 0,   "image": "5.jpg" },
          { "id": "with-lid", "name": "مع غطاء",   "price": 2.5, "image": "1.jpg" },
         // { "id": "lid-only", "name": "غطاء فقط",  "price": 2.5, "image": "1.jpg", "override": true }
        ]
      },*/
     /* {
        // مجموعة 2: المقاس — "price" هون هو سعر القطعة الواحدة الكامل
        // لهذا المقاس (بدون احتساب الغطاء)، وفوقه تُضاف زيادة الغطاء
        // من مجموعة "lid" أعلاه إن اختار العميل "مع غطاء".
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "1.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "1.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "1.jpg" }
        ]
      },*/
      {
        // مجموعة 3: الكمية — "قطعة مفردة" ما تُغيّر شي بالسعر (0)، وتُترك
        // السعر يُحسب من الغطاء+المقاس فوق. "دزينة" و"طرد" عليهما
        // override:true لأنهما سعر صندوق/دزينة ثابت بحد ذاته (لا علاقة
        // له بالمقاس أو الغطاء المختار حاليًا) — عدّل الأرقام لو حبيت
        // تخلي لكل مقاس سعر دزينة/طرد مختلف (أضف مجموعات/أزرار إضافية).
        "id": "packaging",
        "name": "الكمية",
        "options": [
          //{ "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "1.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "1.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "1.jpg", "override": true }
        ]
      },
    ]
  },
  {
    "id": "p2",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 0,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "2.jpg",
    "badge": "",
    "imageWithLid": "13.jpg",
    "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "2.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "2.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "2.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p3",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "3.jpg",
    "imageWithLid": "1.jpg",
    "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "3.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "3.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "3.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p4",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 10.99,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "4.jpg",
    "imageWithLid": "13.jpg",
    "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "4.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "4.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "4.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p5",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "5.jpg",
    "imageWithLid": "1.jpg",
    "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
          //{ "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "5.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "5.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "5.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p6",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "6.jpg",
    "imageWithLid": "13.jpg",
    "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "6.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "6.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "6.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p7",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "7.jpg",
    "imageWithLid": "1.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "7.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "7.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "7.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p8",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "8.jpg",
    "imageWithLid": "13.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "8.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "8.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "8.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p9",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "9.jpg",
    "imageWithLid": "1.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "9.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "9.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "9.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p10",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "",
    "image": "10.jpg",
    "imageWithLid": "13.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "10.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "10.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "10.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p11",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "11.jpg",
    "imageWithLid": "1.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
          //{ "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "11.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "11.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "11.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p12",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "12.jpg",
    "imageWithLid": "13.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "12.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "12.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "12.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p13",
    "name": "كاسة قهوة مع غطاء",
    "category": "coffee-cups",
    "sub": "with-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "13.jpg",
    "imageWithLid": "13.jpg",
    "imageNoLid": "3.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "13.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "13.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "13.jpg",  }
        ]
      },

  ]
  },
  {
    "id": "p14",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "14.jpg",
    "imageWithLid": "1.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "14.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "14.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "14.jpg", "override": true }
        ]
      },

  ]
  },
   {
    "id": "p15",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "15.jpg",
    "imageWithLid": "1.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "15.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "15.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "15.jpg", "override": true }
        ]
      },

  ]
  },
   {
    "id": "p16",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "16.jpg",
    "imageWithLid": "1.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "16.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "16.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "16.jpg", "override": true }
        ]
      },

  ]
  },
   {
    "id": "p17",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "17.jpg",
    "imageWithLid": "1.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "17.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "17.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "17.jpg", "override": true }
        ]
      },

  ]
  },
   {
    "id": "p17.1",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كوب كرتون مطابق للمواصفات الصحية (ساخن -- بارد) صناعة سورية",
    "image": "17.1.jpg",
    "imageWithLid": "1.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "17.1.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "17.1.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "17.1.jpg", "override": true }
        ]
      },

  ]
  },
   {
    "id": "p17.2",
    "name": " غطاء كاسات دبل ثقب ",
    "category": "coffee-cups",
    "sub": "lid",
    "price": 0,
    "desc": "غطاء كاسات بثقب دبل مناسب لحجم 12 و16",
    "image": "17.2.jpg",
    "badge": "",
     "hasLidOption": false,
      "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "17.2.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "17.2.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "17.2.jpg", "override": true }
        ]
      },

  ]
  },
   {
    "id": "p18",
    "name": "كاسة كرتون للايس كريم",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كاسة بوظة كرتون مطابقة للمواصفات الصحية صناعة سورية",
    "image": "18.jpg",
    "imageWithLid": "1.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "18.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "18.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "18.jpg", "override": true }
        ]
      },

  ]
  },
   {
    "id": "p19",
    "name": "كاسة كرتون للعصير",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كاسة عصير كرتون مطابقة للمواصفات الصحية صناعة سورية",
    "image": "19.jpg",
    "imageWithLid": "1.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "19.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "19.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "19.jpg", "override": true }
        ]
      },

  ]
  },
   {
    "id": "p20",
    "name": "كاسة كرتون للاندومي",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "كاسة اندومي كرتون مطابقة للمواصفات الصحية صناعة سورية",
    "image": "20.jpg",
    "imageWithLid": "1.jpg",
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "20.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "20.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "20.jpg", "override": true }
        ]
      },

  ]
  },
  {
    "id": "p21",
    "name": "نايلون لاصق منزلي",
    "category": "wrapping",
    "sub": "cling-wrap",
    "price": 22,
    "desc": "يُستخدم رول النايلون لتغليف الأغذية في المطاعم والمنازل، ويتوفر بقياسين: وزن 1كغ بعرض 45سم، ووزن 1كغ بعرض 35سم.",
    "image": "21.jpg",
    "hasLidOption": false,
     "variantGroups": [
     
     {
        // مجموعة 2: المقاس — "price" هون هو سعر القطعة الواحدة الكامل
        // لهذا المقاس (بدون احتساب الغطاء)، وفوقه تُضاف زيادة الغطاء
        // من مجموعة "lid" أعلاه إن اختار العميل "مع غطاء".
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "عرض 30 سم * طول 30 متر", "price": 0, "image": "21.jpg" },
          { "id": "size-6", "name": "عرض 45 سم * طول 20 متر", "price": 0, "image": "21.jpg" },
          
        ]
      },
      {
        // مجموعة 3: الكمية — "قطعة مفردة" ما تُغيّر شي بالسعر (0)، وتُترك
        // السعر يُحسب من الغطاء+المقاس فوق. "دزينة" و"طرد" عليهما
        // override:true لأنهما سعر صندوق/دزينة ثابت بحد ذاته (لا علاقة
        // له بالمقاس أو الغطاء المختار حاليًا) — عدّل الأرقام لو حبيت
        // تخلي لكل مقاس سعر دزينة/طرد مختلف (أضف مجموعات/أزرار إضافية).
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "21.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "21.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "21.jpg", "override": true }
        ]
      },
    ]
  },
  {
    "id": "p22",
    "name": "نايلون لاصق غذائي",
    "category": "wrapping",
    "sub": "cling-wrap",
    "price": 18.9,
    "desc": "رول نايلون لتغليف الأغذية مطابق للمواصفات الصحية صناعة سورية",
    "image": "22.jpg",
    "badge": "",
    "hasLidOption": false,
     "variantGroups": [
     
     {
        // مجموعة 2: المقاس — "price" هون هو سعر القطعة الواحدة الكامل
        // لهذا المقاس (بدون احتساب الغطاء)، وفوقه تُضاف زيادة الغطاء
        // من مجموعة "lid" أعلاه إن اختار العميل "مع غطاء".
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "عرض 45 سم-- وزن 4 كغ", "price": 0, "image": "22.jpg" },
          { "id": "size-6", "name": "عرض 45 سم-- وزن 1 كغ", "price": 0, "image": "22.jpg" },
           { "id": "size-8", "name": "عرض 35 سم-- وزن 1 كغ", "price": 0, "image": "22.jpg" },
            { "id": "size7", "name": "عرض 30 سم-- وزن 4 كغ", "price": 0, "image": "22.jpg" },
          
        ]
      },
      {
        // مجموعة 3: الكمية — "قطعة مفردة" ما تُغيّر شي بالسعر (0)، وتُترك
        // السعر يُحسب من الغطاء+المقاس فوق. "دزينة" و"طرد" عليهما
        // override:true لأنهما سعر صندوق/دزينة ثابت بحد ذاته (لا علاقة
        // له بالمقاس أو الغطاء المختار حاليًا) — عدّل الأرقام لو حبيت
        // تخلي لكل مقاس سعر دزينة/طرد مختلف (أضف مجموعات/أزرار إضافية).
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "22.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "22.jpg", "override": true },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "22.jpg", "override": true }
        ]
      },
    ]

  },
  {
    "id": "p23",
    "name": "   لاصق حراري للصوبة للعزل الحراري",
    "category": "wrapping",
    "sub": "cling-wrap",
    "price": 26.5,
    "desc": "لزيق صوبا للعزل الحراري، يتوفر بثلاثة ألوان: الفضي، البني، والأسود  صناعة سورية",
    "image": "23.jpg",
    "hasLidOption": false,
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "23.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "23.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "23.jpg", }
        ]
      },
  ]
  },
  {
    "id": "p24",
    "name": "لزيق كريستال شفاف",
    "category": "wrapping",
    "sub": "cling-wrap",
    "price": 26.5,
    "desc": "لزيق كرستال شفاف قوي ومرن، يتوفر بعدة قياسات: 70 يرد (وزن تقريبي للبكرة 100غ)، 90 يرد (150غ)، 150 يرد (350غ)، و300 يرد (450غ)  متين وقوي الإلتصاق صناعة سورية",
    "image": "24.jpg",
    "hasLidOption": false,
     "variantGroups": [
      {
      "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "24.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  "image": "24.jpg", },
          { "id": "carton", "name": "طرد",         "price": 0, "image": "24.jpg", }
        ]
      },
  ]
  },
  {
    "id": "p25",
    "name": "شيلمون كوكتيل بأحجام مختلفة",
    "category": "plastic",
    "sub": "tumblers",
    "price": 4.5,
    "desc": "شليمون كوكتيل ملوّن بعرض 6مل، يتوفر بقياسين: طويل وقصير صناعة سورية",
    "image": "25.jpg",
    "hasLidOption": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "طويل", "price": 0,   "image": "25.jpg"  },
          { "id": "with-lid", "name": "قصير ",   "price": 2.5, "image": "30.jpg"},
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]

  },
  {
    "id": "p26",
    "name": "شيلمون شفاف",
    "category": "plastic",
    "sub": "tumblers",
    "price": 15,
    "desc": "شليمون شفاف طويل عرض 6 مل صناعة سورية",
    "image": "26.jpg",
    "badge": "",
    "hasLidOption": false,
      "variantGroups": [
         {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "26.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "26.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "26.jpg" }
        ]
      },
  ]
  },
  {
    "id": "p27",
    "name": "شيلمون قهوة",
    "category": "plastic",
    "sub": "tumblers",
    "price": 19.99,
    "desc": "شليمون قصير للقهوة إنتاج شركة الدبس صناعة سورية",
    "image": "27.jpg",
    "hasLidOption": false,
      "variantGroups": [
         {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "27.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "27.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "27.jpg" }
        ]
      },
  ]

    
  },
  {
    "id": "p28",
    "name": "صحن زورق البدر",
    "category": "bool",
    "sub": "plates",
    "price": 19.99,
    "desc": "صحن بلاستيكي على شكل زورق، يُستخدم في الرحلات والمناسبات صناعة سورية",
    "image": "28.jpg",
    "hasLidOption": false,
      "variantGroups": [
         {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "28.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "28.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "28.jpg" }
        ]
      },
  ]
  },
  {
    "id": "p29",
    "name": "صحن الكا",
    "category": "bool",
    "sub": "plates",
    "price": 19.99,
    "desc": "صحن بلاستيكي مدوّر من شركة البدر وشركة الكا صناعة سورية",
    "image": "29.jpg",
    "hasLidOption": false,
      "variantGroups": [
         {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "29.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "29.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "29.jpg" }
        ]
      },
  ]
  },
  {
    "id": "p31",
    "name": "كاسات ازدهاد مع غطاء",
    "category": "coffee-cups",
    "sub": "with-lid",
    "price": 11.25,
    "desc": "كاسات بلاستيكية شفافة متينة مع غطاء أسود أنيق، مقاومة للحرارة لغاية 120 درجة، وتتوفر بثلاثة قياسات: 12 اونص، 14 اونص، و16 اونص صناعة اردنية",
    "image": "31.jpg",
    "hasLidOption": false,
      "variantGroups": [
         {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "31.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "31.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "31.jpg" }
        ]
      },
  ]
  },
  {
    "id": "p32",
    "name": "ورق نايلون",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": " نايلون شفاف من شركة النسر، يتوفر بقياسين: عرض 26سم × طول 26سم، وعرض 37سم × طول 46سم صناعة سورية",
    "image": "32.jpg",
    "hasLidOption": false,
      "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "عرض 26 سم * طول 26 سم", "price": 0,   "image": "32.jpg"  },
          { "id": "with-lid", "name": "عرض 37سم * طول 46سم ",   "price": 2.5, "image": "32.jpg"},
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]

  },
  {
    "id": "p33",
    "name": "اكياس نايلون سحاب",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 26.5,
    "desc": "أكياس شفافة حافظة للطعام تأتي مع سحاب لإحكام الإغلاق، للحفاظ على نضارة الطعام لأطول مدة ممكنة عند التخزين صناعة سورية",
    "image": "33.jpg",
    "hasLidOption": false,
       "variantGroups": [
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "33.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "33.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "33.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p34",
    "name": "ملعقة بلاستك",
    "category": "plastic",
    "sub": "cutlery",
    "price": 18.9,
    "desc": "معالق طعام بلاستيكية مرنة، تأتي بنوعين (نخب أول ونخب ثاني) وبعدة ألوان: أسود،  حليبي، وشفاف صناعة سورية",
    "image": "34.jpg",
    "badge": "",
    "hasLidOption": false,
     "variantGroups": [
      {
        "id": "color",
        "name": "لون",
        "options": [
          { "id": "no-lid",   "name": "أسود", "price": 0,   "image": "148.jpg" },
          { "id": "with-lid", "name": "حليبي ",   "price": 2.5, "image": "34.jpg" },
          { "id": "lid-only", "name": "شفاف",  "price": 2.5, "image": "146.jpg", "override": true }
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, },
          { "id": "carton", "name": "طرد",         "price": 340, }
        ]
      },
    ]
  },
  {
    "id": "p35",
    "name": "علب 1كغ",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "طوس بلاستيكية مرنة ومتينة بلون حليبي من شركة البدر صناعة سورية",
    "image": "35.jpg",
     "variantGroups": [
     /* {
        "id": "color",
        "name": "لون",
        "options": [
          { "id": "no-lid",   "name": "أسود", "price": 0,   "image": "148.jpg" },
          { "id": "with-lid", "name": "حليبي ",   "price": 2.5, "image": "34.jpg" },
          { "id": "lid-only", "name": "شفاف",  "price": 2.5, "image": "146.jpg", "override": true }
        ]
      },*/
      {
        "id": "size",
        "name": "الحجم",
        "options": [
          { "id": "size-9", "name": " 1 كغ", "price": 9.99, "image": "35.jpg" },
          { "id": "size-6", "name": " 2 كغ", "price": 7.99, "image": "36.jpg" },
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, },
          { "id": "carton", "name": "طرد",         "price": 340, }
        ]
      },
    ]
    
  },
  {
    "id": "p37",
    "name": "علب شفاف مع غطاء مختلفة الأحجام",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "طوس بلاستيكية مرنة ومتينة بلون شفاف من شركة البدر، تتوفر بعدة سعات: 400غ، 500غ، 900غ، 1كغ، و2كغ صناعة سورية",
    "image": "37.jpg",
     "variantGroups": [
     /* {
        "id": "color",
        "name": "لون",
        "options": [
          { "id": "no-lid",   "name": "أسود", "price": 0,   "image": "148.jpg" },
          { "id": "with-lid", "name": "حليبي ",   "price": 2.5, "image": "34.jpg" },
          { "id": "lid-only", "name": "شفاف",  "price": 2.5, "image": "146.jpg", "override": true }
        ]
      },*/
      {
        "id": "size",
        "name": "الحجم",
        "options": [
           { "id": "size-5", "name": "400 غ ", "price": 7.99, "image": "301.jpg" },
          { "id": "size-9", "name": " 500 غ", "price": 9.99, "image": "37.jpg" },
          { "id": "size-6", "name": " 900 غ", "price": 7.99, "image": "302.jpg" },
           { "id": "size-7", "name": " 1 كغ", "price": 7.99, "image": "38.jpg" },
            { "id": "size-8", "name": " 2 كغ", "price": 7.99, "image": "303.jpg" },
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, },
          { "id": "carton", "name": "طرد",         "price": 340, }
        ]
      },
    ]
  },
  {
    "id": "p39",
    "name": "مطاط طبيعي",
    "category": "wrapping",
    "sub": "rubber-bands",
    "price": 26.5,
    "desc": "طقم من 3 أطباق زجاجية متداخلة للتحضير والخلط والتقديم صناعة تايلندية",
    "image": "39.jpg",
    "hasLidOption": false,
      "variantGroups": [
     /* {
        "id": "color",
        "name": "لون",
        "options": [
          { "id": "no-lid",   "name": "أسود", "price": 0,   "image": "148.jpg" },
          { "id": "with-lid", "name": "حليبي ",   "price": 2.5, "image": "34.jpg" },
          { "id": "lid-only", "name": "شفاف",  "price": 2.5, "image": "146.jpg", "override": true }
        ]
      },*/
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": " 16", "price": 9.99, "image": "39.jpg" },
          { "id": "size-6", "name": " 18", "price": 7.99, "image": "39.jpg" },
           /*{ "id": "size-7", "name": " 1 كغ", "price": 7.99, "image": "38.jpg" },
            { "id": "size-8", "name": " 1 كغ", "price": 7.99, "image": "38.jpg" },
             { "id": "size-5", "name": " 1 كغ", "price": 7.99, "image": "38.jpg" },*/
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, },
          { "id": "carton", "name": "طرد",         "price": 340, }
        ]
      },
    ]
  },
  {
    "id": "p40",
    "name": "مطاط تايلندي",
    "category": "wrapping",
    "sub": "rubber-bands",
    "price": 26.5,
    "desc": "طقم من 3 أطباق زجاجية متداخلة للتحضير والخلط والتقديم صناعة تايلندية",
    "image": "40.jpg",
    "hasLidOption": false,
    "variantGroups": [
     /* {
        "id": "color",
        "name": "لون",
        "options": [
          { "id": "no-lid",   "name": "أسود", "price": 0,   "image": "148.jpg" },
          { "id": "with-lid", "name": "حليبي ",   "price": 2.5, "image": "34.jpg" },
          { "id": "lid-only", "name": "شفاف",  "price": 2.5, "image": "146.jpg", "override": true }
        ]
      },*/
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": " 14", "price": 9.99, "image": "40.jpg" },
          { "id": "size-6", "name": " 16", "price": 7.99, "image": "40.jpg" },
           { "id": "size-7", "name": " 18", "price": 7.99, "image": "40.jpg" },
           /* { "id": "size-8", "name": " 1 كغ", "price": 7.99, "image": "38.jpg" },
             { "id": "size-5", "name": " 1 كغ", "price": 7.99, "image": "38.jpg" },*/
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          //{ "id": "piece",  "name": "قطعة مفردة", "price": 0,  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, },
          { "id": "carton", "name": "طرد",         "price": 340, }
        ]
      },
    ]
  },
  {
    "id": "p41",
    "name": "اكياس ثلج صحية",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 26.5,
    "desc": "طقم من 3 أطباق زجاجية متداخلة للتحضير والخلط والتقديم صناعة سورية",
    "image": "41.jpg",
    "hasLidOption": false,
     "variantGroups": [
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "41.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "41.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,"image": "41.jpg" }
        ]
      },
  ]
  },
  {
    "id": "p42",
    "name": "أكياس قمامة",
    "category": "bags",
    "sub": "bags",
    "price": 26.5,
    "desc": "رول قمامة النسر نخب أول، متين ويتحمل الأوزان، وبدون رائحة صناعة سورية",
    "image": "42.jpg",
    "hasLidOption": false,
     "variantGroups": [
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "42.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "42.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,"image": "42.jpg" }
        ]
      },
  ]
  },
  {
    "id": "p43",
    "name": "رول سجاد",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "رول نايلون حليبي لتغليف السجاد من شركة الدبس، يُستخدم للحفاظ عليها من الغبار والأوساخ صناعة سورية",
    "image": "43.jpg",
    "hasLidOption": false,
      "variantGroups": [
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "43.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "43.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,"image": "43.jpg" }
        ]
      },
  ]
  },
  {
    "id": "p44",
    "name": "رول ورق سندويش",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "رول نايلون للسندويش من شركة النسر والدبس، يتوفر بثلاثة مقاسات: عرض 15سم×طول 25سم، عرض 20سم×طول 30سم، وعرض 25سم×طول 35سم صناعة سورية",
    "image": "44.jpg",
    "hasLidOption": false,
     "variantGroups": [
     /* {
        "id": "color",
        "name": "لون",
        "options": [
          { "id": "no-lid",   "name": "أسود", "price": 0,   "image": "148.jpg" },
          { "id": "with-lid", "name": "حليبي ",   "price": 2.5, "image": "34.jpg" },
          { "id": "lid-only", "name": "شفاف",  "price": 2.5, "image": "146.jpg", "override": true }
        ]
      },*/
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": " عرض 15سم×طول 25سم", "price": 9.99, "image": "44.jpg" },
          { "id": "size-6", "name": " عرض 20سم×طول 30سم", "price": 7.99, "image": "44.jpg" },
           { "id": "size-7", "name": " عرض 25سم×طول 35سم", "price": 7.99, "image": "44.jpg" },
           /* { "id": "size-8", "name": " 1 كغ", "price": 7.99, "image": "38.jpg" },
             { "id": "size-5", "name": " 1 كغ", "price": 7.99, "image": "38.jpg" },*/
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, },
          { "id": "carton", "name": "طرد",         "price": 340, }
        ]
      },
    ]
  },
  {
    "id": "p45",
    "name": "صحون فلين بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن فلين مستطيل قياس س3، يأتي من عدة مصانع: الزهير (تعبئة الطرد 8 دزينة، تعبئة الدزينة 25 صحن)، الإحسان (تعبئة الطرد 8 دزينة، تعبئة الدزينة 50 صحن)، والفرزات (تعبئة الطرد 8 دزينة، تعبئة الدزينة 50 صحن) صناعة سورية",
    "image": "45.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "كبير", "price": 0,   "image": "45.jpg"  },
          { "id": "with-lid", "name": "وسط ",   "price": 2.5, "image": "47.jpg"},
          { "id": "lid-only", "name": "صغير",  "price": 2.5, "image": "46.jpg",  }
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
    "id": "p49",
    "name": "أكياس قهوة",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 26.5,
    "desc": "أكياس بن بمقاس 250 صناعة سورية",
    "image": "49.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "49.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "49.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "49.jpg" }
        ]
      },
     ]
  },
  {
    "id": "p50",
    "name": "قصدير الفداء",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "رول قصدير منزلي لتغليف الأغذية صناعة سورية",
    "image": "50.jpg",
    "hasLidOption": false,
    "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    "image": "50.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   "image": "50.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,   "image": "50.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p51",
    "name": "رول ورق زبدة",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "رول زبدة منزلي متعدد الاستخدامات صناعة سورية",
    "image": "51.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "51.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   "image": "51.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "51.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p52",
    "name": "أكياس هدايا",
    "category": "bags",
    "sub": "gift_bags",
    "price": 26.5,
    "desc": "أكياس هدايا مطبوع الطويل صناعة سورية",
    "image": "52.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "52.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "52.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "52.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p53",
    "name": "أكياس قهوة",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 26.5,
    "desc": "أكياس بن بمقاس 250 صناعة سورية",
    "image": "53.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "53.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "53.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "53.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p54",
    "name": "أكياس قهوة",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 26.5,
    "desc": "أكياس بن بمقاس 250 صناعة سورية",
    "image": "54.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    "image": "54.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "54.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "54.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p55",
    "name": "علب كرتون مع غطاء",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "علب غرافيت متينة مقاومة للماء، محكمة الإغلاق وأنيقة المظهر صناعة سورية",
    "image": "55.jpg",
    "variantGroups": [
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "500ml", "price": 0,   "image": "142.jpg" },
          { "id": "with-lid", "name": "750ml ",   "price": 2.5, "image": "143.jpg" },
          { "id": "lid-only", "name": "1000ml",  "price": 2.5, "image": "144.jpg", "override": true },
          { "id": "-only", "name": "1300ml",  "price": 2.5, "image": "145.jpg", "override": true }
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   },
          { "id": "carton", "name": "طرد",         "price": 340,   }
        ]
      },
    ]
    
  },
  {
    "id": "p56",
    "name": "أكياس قهوة",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 26.5,
    "desc": "أكياس بن بمقاس 500 صناعة سورية",
    "image": "56.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    "image": "56.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   "image": "56.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,   "image": "56.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p57",
    "name": "أكياس قهوة",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 26.5,
    "desc": "أكياس بن بمقاس 500 صناعة سورية",
    "image": "57.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "57.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "57.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "57.jpg" }
        ]
      },
    ]
  },
 
  {
    "id": "p59",
    "name": "ورق تغليف ",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "بكرة ورق بعرض 50سم، تتوفر بثلاث خامات: ألماني، فرنسي، وجريدة صناعة سورية",
    "image": "59.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "59.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "59.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "59.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p60",
    "name": "قصدير صناعي",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "بكرة قصدير عازل، تُستخدم للعزل الحراري للمحركات والمطابخ صناعة سورية",
    "image": "60.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "60.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "60.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "60.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p61",
    "name": "ورق زبدة",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "ورق صندويش مستطيل، يتوفر بخامتين فرنسي وألماني، وبشكلين مربع ومستطيل صناعة سورية",
    "image": "61.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "61.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "61.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "61.jpg"}
        ]
      },
    ]
  },
  /*{
    "id": "p62",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 11.25,
    "desc": "طقم من فنجانين صغيرين مع أطباقهما، مثالي للقهوة التركية.",
    "image": "62.jpg",
    "imageWithLid": "13.jpg",
    "hasLidOption": false
  },*/
  {
    "id": "p63",
    "name": "قاعدة كيك",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "قواعد كرتون للكيك، تُفصَّل حسب رغبة الزبون صناعة سورية",
    "image": "63.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "63.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "63.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "63.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p64",
    "name": "قوالب كاب كيك",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "قوالب كب كيك ورقية، تأتي بثلاثة أحجام: كبيرة، وسط، وصغيرة صناعة سورية",
    "image": "64.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          //{ "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "64.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340, "image": "64.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p65",
    "name": "أكياس ورقية",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "كيس ورق كعب، يُستخدم للمكسرات والموالح صناعة سورية",
    "image": "65.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "65.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "65.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "65.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p66",
    "name": "أكياس ثلج",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "كيس ثلج صحي، يُستخدم لصناعة الثلج صناعة سورية",
    "image": "66.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "66.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "66.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340, "image": "66.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p67",
    "name": "سكين بلاستك",
    "category": "plastic",
    "sub": "cutlery",
    "price": 18.9,
    "desc": "سكين بلاستيكية مرنة وقوية، تتوفر بالألوان التالية: أسود، شفاف، وحليبي صناعة سورية",
    "image": "67.jpg",
    "badge": "",
    "hasLidOption": false,
     "variantGroups": [
      {
        "id": "lid",
        "name": "الغطاء",
        "options": [
          { "id": "no-lid",   "name": "أسود", "price": 0,   "image": "147.jpg" },
          { "id": "with-lid", "name": "أبيض ",   "price": 2.5, "image": "67.jpg" },
          { "id": "lid-only", "name": "شفاف",  "price": 2.5, "image": "149.jpg",  }
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,    },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
    "id": "p68",
    "name": "أكياس هدايا",
    "category": "bags",
    "sub": "gift_bags",
    "price": 26.5,
    "desc": "طقم من 3 أطباق زجاجية متداخلة للتحضير والخلط والتقديم صناعة سورية",
    "image": "68.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "68.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "68.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340, "image": "68.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p69",
    "name": "كفوف استعمال مرة واحدة",
    "category": "plastic",
    "sub": "golves",
    "price": 0,
    "desc": "علبة كفوف استعمال مرة واحدة، معقمة وصحية من شركة وارتكس، تحتوي العلبة على 400 كف صناعة سورية",
    "image": "69.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "69.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "69.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "69.jpg" }
        ]
      },
    ]

    
  },
  {
    "id": "p70",
    "name": "قفازات شفاف ",
    "category": "plastic",
    "sub": "golves",
    "price": 0,
    "desc": "كفوف شفاف استعمال مرة واحدة من شركة ايمش صناعة سورية",
    "image": "70.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "70.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "70.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,"image": "70.jpg" }
        ]
      },
    ]

    
  },
  {
    "id": "p70.1",
    "name": "كفوف لاتيكس",
    "category": "plastic",
    "sub": "golves",
    "price": 0,
    "desc": "كفوف لاتيكس للجلي من شركة واريتكس صناعة سورية",
    "image": "70.1.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "70.1.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "70.1.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "70.1.jpg" }
        ]
      },
    ]

    
  },
  {
    "id": "p70.2",
    "name": "كفوف لاتيكس  معقمة",
    "category": "plastic",
    "sub": "golves",
    "price": 0,
    "desc": "كفوف لاتيكس معقمة للجلي من شركة واريتكس صناعة سورية",
    "image": "70.2.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "70.2.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "70.2.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340, "image": "70.2.jpg"}
        ]
      },
    ]

    
  },
  {
    "id": "p70.3",
    "name": "طاقية شاش",
    "category": "plastic",
    "sub": "golves",
    "price": 0,
    "desc": "طاقية شاش تمنع تساقط الشعر صناعة سورية",
    "image": "70.3.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "70.3.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "70.3.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "70.3.jpg"}
        ]
      },
    ]

    
  },
  {
    "id": "p71",
    "name": "ليفة ظهر مساج",
    "category": "clean",
    "sub": "lefa",
    "price": 26.5,
    "desc": "ليفة ظهر صناعية من شركة وارتكس صناعة سورية",
    "image": "71.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "71.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "71.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "71.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p72",
    "name": "ليفة كف مساج",
    "category": "clean",
    "sub": "lefa",
    "price": 26.5,
    "desc": "ليفة كف صناعية من شركة وارتكس صناعة سورية",
    "image": "72.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "72.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "72.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340, "image": "72.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p73",
    "name": "ليفة ظهر سيسال",
    "category": "clean",
    "sub": "lefa",
    "price": 26.5,
    "desc": "ليفة ظهر طبيعية من شركة سيسال. يتوفر أيضًا كف حمام مغربي للجسم صناعة سورية",
    "image": "73.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "73.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "73.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "73.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p73.1",
    "name": "الليفة المغربية",
    "category": "clean",
    "sub": "lefa",
    "price": 26.5,
    "desc": "كيس حمام أسود صناعية سورية",
    "image": "73.1.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "73.1.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "73.1.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "73.1.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p74",
    "name": "ليفة متعددة الاستخدامات",
    "category": "clean",
    "sub": "lefa",
    "price": 26.5,
    "desc": "ليفة جلي متعددة الاستخدام، تحتوي على قطعتين صناعة سورية",
    "image": "74.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "74.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "74.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "74.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p75",
    "name": "ليفة جلي",
    "category": "clean",
    "sub": "lefa",
    "price": 26.5,
    "desc": "ليفة جلي ثلاثية من شركة وارتكس صناعة سورية",
    "image": "75.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "75.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "75.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "75.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p75.1",
    "name": "سيفة",
    "category": "clean",
    "sub": "lefa",
    "price": 26.5,
    "desc": "سيفة معدنية مقاومة للصدأ صناعة سورية",
    "image": "75.1.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "75.1.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "75.1.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "75.1.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p76",
    "name": "فوطة المطبخ المايكرو كلين",
    "category": "clean",
    "sub": "mamaseh",
    "price": 26.5,
    "desc": "فوطة مطبخ مبطنة، ناعمة على الأسطح وقوية على الأوساخ صناعة سورية",
    "image": "76.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "76.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "76.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340,"image": "76.jpg"  }
        ]
      },
    ]
  },
  {
    "id": "p77",
    "name": "ممسحة الغبار المايكرو كلين",
    "category": "clean",
    "sub": "mamaseh",
    "price": 26.5,
    "desc": "فوطة صفراء اقتصادية، تُستخدم لجميع أنواع الأسطح صناعة سورية",
    "image": "77.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "77.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "77.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "77.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p78",
    "name": "فوطة الزجاج المايكرو كلين",
    "category": "clean",
    "sub": "mamaseh",
    "price": 26.5,
    "desc": "فوطة من القماش المقاوم للماء يستحدم لمسح الزجاج صناعة سورية",
    "image": "78.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "78.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "78.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "78.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p79",
    "name": "ممسحة الأرض المايكرو كلين",
    "category": "clean",
    "sub": "mamaseh",
    "price": 26.5,
    "desc": "ممسحة أرضيات فائقة الامتصاص للسوائل، وناعمة على الأرضيات صناعة سورية",
    "image": "79.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "79.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   "image": "79.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "79.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p80",
    "name": "ورق زبدة الدائري",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "ورق زبدة مدوّر من شركة وارتكس، يأتي بقياسين: قطر 40سم (تعبئة 17 قطعة)، وقطر 32سم (تعبئة 30 قطعة) صناعة سورية",
    "image": "80.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "80.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "80.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "80.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p81",
    "name": "أكياس نايلون شفافة",
    "category": "bags",
    "sub": "0_bags",
    "price": 26.5,
    "desc": "أكياس شيّال شفاف زراعية، تأتي بعدة قياسات: 35، 45، 50، 55، 65، 75 صناعة سورية",
    "image": "81.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    "image": "81.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "81.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "81.jpg"  }
        ]
      },
    ]
  },
  {
    "id": "p82",
    "name": "أكياس نايلون أبيض",
    "category": "bags",
    "sub": "0_bags",
    "price": 26.5,
    "desc": "أكياس شيّال أبيض، تتوفر من عدة مصانع وقياسات: مصنع الجرجناوي (25 30 35 40 45 55)، مصنع التركماني (25 30 35 40 45 55)، ومصنع العسلي (25 30 35 40 45 55) صناعة سورية",
    "image": "82.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
    "id": "p83",
    "name": "رول أكياس نايلون شفاف",
    "category": "bags",
    "sub": "0_bags",
    "price": 26.5,
    "desc": "رول نايلون من شركة المتين لحفظ الأغذية صناعة سورية",
    "image": "83.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "83.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "83.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "83.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p84",
    "name": " قالب المنينوم للكيك  ",
    "category": "plastic",
    "sub": "plates",
    "price": 19.99,
    "desc": "قوالب كيك من القصدير صناعة سورية",
    "image": "84.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         //{ "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "84.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,   "image": "84.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p85",
    "name": "أكياس  التركماني بالابيض والاسود",
    "category": "bags",
    "sub": "0_bags",
    "price": 26.5,
    "desc": "أكياس شيّال أبيض، صديق للبيئة صناعة سورية",
    "image": "85.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    "image": "85.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "85.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "85.jpg"  }
        ]
      },
    ]
  },
  {
    "id": "p86",
    "name": "أكياس قمامة مجددة",
    "category": "bags",
    "sub": "bags",
    "price": 26.5,
    "desc": "أكياس قمامة مجدد، تتميز بالمتانة والتوفير، ولا تحتوي على محسنات أو رائحة صناعة سورية",
    "image": "86.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     "image": "86.jpg" },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   "image": "86.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,   "image": "86.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p87",
    "name": "أكياس الجرجنازي بالوان واحجام مختلفة",
    "category": "bags",
    "sub": "0_bags",
    "price": 26.5,
    "desc": "أكياس شيّال أزرق من مصنع الجرجنازي، صناعة سورية",
    "image": "87.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "87.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "87.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "87.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p88",
    "name": "أكياس نايلون مجددة",
    "category": "bags",
    "sub": "0_bags",
    "price": 26.5,
    "desc": "أكياس شيّال زهري من مصنع الجرجنازي، صناعة سورية",
    "image": "88.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "88.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "88.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340, "image": "88.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p89",
    "name": "اكياس تعبئة الاغذية ",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 26.5,
    "desc": "أكياس شفافة لتعبئة الأغذية، تتوفر من عدة مصانع وقياسات: مصنع التركماني (15×25 20×30 25×35 30×40 35×50 40×60)، ومصنع العسلي (10×20 15×25 20×30 25×35 30×40 35×50 40×60) صناعة سورية",
    "image": "89.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "89.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "89.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "89.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p90",
    "name": "اكياس توابل صحية",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 26.5,
    "desc": "أكياس شفافة تُستخدم لتعبئة التوابل، تتوفر من عدة مصانع، منها مصنع العمر بقياسات: 9×11، 12×15، 10×20، 12×20 صناعة سورية",
    "image": "90.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "90.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "90.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "90.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p91",
    "name": "أكياس العسلي بالأبيض وألاسود",
    "category": "bags",
    "sub": "0_bags",
    "price": 26.5,
    "desc": "أكياس شيّال ابيض صناعة سورية",
    "image": "91.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "91.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "91.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "91.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p92",
    "name": "  فرشاية سجاد",
    "category": "clean",
    "sub": "plastic clean",
    "price": 26.5,
    "desc": "فرشاة للسجاد من شركة واريتكس صناعة سورية",
    "image": "92.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "92.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "92.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "92.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p93",
    "name": " فرشاية وسفاية ",
    "category": "clean",
    "sub": "plastic clean",
    "price": 26.5,
    "desc": "سفاية ومكنسة من شركة واريتكس متانة عالية صناعة سورية",
    "image": "93.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "93.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "93.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "93.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p94",
    "name": " مساحة زجاج ",
    "category": "clean",
    "sub": "plastic clean",
    "price": 26.5,
    "desc": "مساحة زجاج من شركة واريتكس تلميع عالي للزجاج صناعة سورية",
    "image": "94.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "94.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "94.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "94.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p95",
    "name": "  فرشاية تواليت",
    "category": "clean",
    "sub": "plastic clean",
    "price": 26.5,
    "desc": "فرشاية تواليت من شركة وارتيكس لنظافة حمامك وإزالة البقع صناعة سورية",
    "image": "95.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "95.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "95.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340, "image": "95.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p100",
    "name": "صحون وجبة قصدير بأحجام مخلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "",
    "image": "100.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "الغطاء",
        "options": [
          { "id": "no-lid",   "name": "كبير", "price": 0,   "image": "100.jpg"  },
          { "id": "with-lid", "name": "وسط ",   "price": 2.5, "image": "101.jpg"},
          { "id": "lid-only", "name": "صغير",  "price": 2.5, "image": "96.jpg" }
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
    "id": "p102",
    "name": "صحون  قصدير مستطيلة بأحجام مخلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "",
    "image": "102.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "الغطاء",
        "options": [
          { "id": "no-lid",   "name": "كبير", "price": 0,   "image": "102.jpg"  },
          { "id": "with-lid", "name": "وسط ",   "price": 2.5, "image": "98.jpg"},
           /*{ "id": "lid-only", "name": "صغير",  "price": 2.5, "image": "96.jpg", "override": true }*/
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
    "id": "p106",
    "name": "صحون وجبة بلاستك بأحجام مخلفة",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "علب بلاستيكية صحية صالحة للاستهلاك الغذائي صناعة سورية",
    "image": "106.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "الغطاء",
        "options": [
          { "id": "no-lid",   "name": "قياس 504", "price": 0,   "image": "103.jpg"  },
          { "id": "with-lid", "name": "قياس 503 ",   "price": 2.5, "image": "104.jpg"},
           { "id": "lid-only", "name": "قياس 433",  "price": 2.5, "image": "105.jpg", "override": true },
           { "id": "mm", "name": "قياس 533",  "price": 2.5, "image": "106.jpg", "override": true }
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
    "id": "p107",
    "name": " غطاء باللون الأسود",
    "category": "coffee-cups",
    "sub": "lid",
    "price": 0,
    "desc": "غطاء من كاسات الكرتون صالح للاستخدام الغذائي",
    "image": "107.jpg",
    "badge": "",
      "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "109.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "107.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "107.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p108",
    "name": "غطاء باللون الابيض ",
    "category": "coffee-cups",
    "sub": "lid",
    "price": 0,
    "desc": "غطاء من كاسات الكرتون صالح للاستخدام الغذائي",
    "image": "108.jpg",
    "badge": "",
      "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
       //   { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "108.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "108.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "108.jpg"}
        ]
      },
    ]
  },
   {
    "id": "p109",
    "name": "غطاء باللون الأسود ",
    "category": "coffee-cups",
    "sub": "lid",
    "price": 0,
    "desc": "غطاء من كاسات الكرتون صالح للاستخدام الغذائي",
    "image": "109.jpg",
    "badge": "",
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         //{ "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "109.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "109.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "109.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p110",
    "name": "حافظة برودة بأحجام مختلفة",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "حافظات حرارية من الفلين، تتوفر بثلاثة مقاسات: صغيرة، وسط، وكبيرة صناعة سورية",
    "image": "110.jpg",
    "hasLidOption": false,
    "variantGroups": [
      {
        "id": "size",
        "name": "الحجم",
        "options": [
          { "id": "no-lid",   "name": "كبير", "price": 0,   "image": "112.jpg" },
          { "id": "with-lid", "name": "وسط ",   "price": 2.5, "image": "111.jpg" },
          { "id": "lid-only", "name": "صغير",  "price": 2.5, "image": "110.1.jpg", "override": true }
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   "override": true },
          { "id": "carton", "name": "طرد",         "price": 340,  "override": true }
        ]
      },
    ]
  },
   {
    "id": "p113",
    "name": "أكياس نايلون للحماية من الغبار",
    "category": "bags",
    "sub": "0_bags",
    "price": 26.5,
    "desc": "أكياس نايلون مقاسات كبيرة مقاومة للغبار والرطوبة صناعة سورية",
    "image": "113.jpg",
    "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "113.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "113.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "113.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p114",
    "name": "ورق قصدير عازل",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "ورق قصدير عازل مصمم خصيصالتحمل أقسى ظروف العزل الصناعي والمنزلي يأتي بقياس (سم90 *60) صناعة سورية",
    "image": "114.jpg",
    "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "114.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "114.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "114.jpg"}
        ]
      },
    ]
    
  },
  {
    "id": "p115",
    "name": "ليفة جسم وردة",
    "category": "clean",
    "sub": "lefa",
    "price": 26.5,
    "desc": "ليفة جسم وردة من شركة واريتكس صناعة سورية",
    "image": "115.jpg",
      "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "115.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "115.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "115.jpg"}
        ]
      },
    ]
  },
   {
    "id": "p116",
    "name": "حفاظات كوش بأحجام مختلفة",
    "category": "diapers",
    "sub": "diapers-baby",
    "price": 26.5,
    "desc": "حفاظات كوش امتصاص فائق تحمي من التسلخ تمنع التسرب صناعة سورية",
    "image": "116.jpg",
    "hasLidOption": false,
     "variantGroups": [
      {
        "id": "size",
        "name": "الحجم",
        "options": [
          { "id": "no-lid",   "name": "S", "price": 0,   "image": "116.jpg" },
          { "id": "with-lid", "name": "M",   "price": 0, "image": "123.jpg" },
          { "id": "lid-only", "name": "L",  "price":0, "image": "124.jpg" },
           { "id": "-lid", "name": "XL",   "price": 0, "image": "120.jpg" },
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  },
          { "id": "carton", "name": "طرد",         "price": 0, }
        ]
      },
    ]
  },
   {
    "id": "p117",
    "name": "حفاظات بامبينو بأحجام مختلفة",
    "category": "diapers",
    "sub": "diapers-baby",
    "price":0,
    "desc": "حفاظات كوش امتصاص فائق تحمي من التسلخ تمنع التسرب صناعة سورية",
    "image": "117.jpg",
    "hasLidOption": false,
     "variantGroups": [
      {
        "id": "size",
        "name": "الحجم",
        "options": [
          { "id": "no-lid",   "name": "صغير1+2", "price": 0,   "image": "119.jpg" },
          { "id": "with-lid", "name": "وسط 3",   "price": 0, "image": "121.jpg" },
          { "id": "lid-only", "name": "كبير 4",  "price":0, "image": "117.jpg" },
           { "id": "-lid", "name": "كبير جداً 5",   "price": 0, "image": "118.jpg" },
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  },
          { "id": "carton", "name": "طرد",         "price": 0, }
        ]
      },
    ]
  },
  {
    "id": "p125",
    "name": "حفاظات صفا ألترا نسائية",
    "category": "diapers",
    "sub": "diapers-womens",
    "price":0,
    "desc": "فوط صفا ألترا حشوة ذات امتصاص مضاعف يأتي بتعبئة 25 قطعة..و44 قطعة مخصصة لما بعد الولادة صناعة سورية",
    "image": "125.jpg",
    "hasLidOption": false,
     "variantGroups": [
      {
        "id": "size",
        "name": "الحجم",
        "options": [
          { "id": "no-lid",   "name": "تعبئة 25", "price": 0,   "image": "125.jpg" },
          { "id": "with-lid", "name": "تعبئة 44",   "price": 0, "image": "126.jpg" },
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  },
          { "id": "carton", "name": "طرد",         "price": 0, }
        ]
      },
    ]
  },
    {
    "id": "p127",
    "name": "رول مدات سفرة نايلون",
    "category": "bags",
    "sub": "0_bags",
    "price": 0,
    "desc": "رول مدات سفرة من شركة الدبس يأتي بثلاث أوزان. 700 غرام + 350 غرام+200 غرام صناعة سورية",
    "image": "127.jpg",
    "hasLidOption": false,
      "variantGroups": [
      {
        "id": "size",
        "name": "الحجم",
        "options": [
          { "id": "no-lid",   "name": "700 غرام", "price": 0,   "image": "127.jpg" },
          { "id": "with-lid", "name": " 350 غرام",   "price": 0, "image": "128.jpg" },
           { "id": "-lid", "name": " 200 غرام",   "price": 0, "image": "129.jpg" },
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  },
          { "id": "carton", "name": "طرد",         "price": 0, }
        ]
      },
    ]
  },
  {
    "id": "p130",
    "name": "خيطان نايلون",
    "category": "wrapping",
    "sub": "rubber-bands",
    "price": 0,
    "desc": "خيطان نايلون عالية الجودة من شركة المثنى يأتي بعرض 8 ML صناعةسورية",
    "image": "130.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0, "image": "130.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "130.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "130.jpg"}
        ]
      },
    ]
  },
  {
    "id": "p131",
    "name": "مناديل صفا",
    "category": "diapers",
    "sub": "tissues",
    "price": 0,
    "desc": " منايل ورقية مرنة من شركة صفا (وزن العلبة 450غ) صناعة سورية",
    "image": "131.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "131.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "131.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "131.jpg" }
        ]
      },
    ]
  },
   {
    "id": "p132",
    "name": "شليمون راصور شفاف ",
    "category": "plastic",
    "sub": "tumblers",
    "price": 4.5,
    "desc": "شيلون الراصور المغلف شفاف(قطر8ملي تعبئة100 قطعة ) صناعة سورية",
    "image": "132.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "132.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "132.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "132.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p133",
    "name": "شليمون راصور ملون ",
    "category": "plastic",
    "sub": "tumblers",
    "price": 4.5,
    "desc": "شيلون الراصور المغلف شفاف(قطر6ملي تعبئة100 قطعة ) صناعة سورية",
    "image": "133.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "133.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "133.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340, "image": "133.jpg" }
        ]
      },
    ]
  },
   {
    "id": "p134",
    "name": "أكياس بصل ",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 26.5,
    "desc": "كيس بصل متين يتحمل الاوزان الثقيلة صناعة سورية  .",
    "image": "134.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "134.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "134.jpg" }
        ]
      },
    ]
  },
   {
    "id": "p135",
    "name": "علب ايس كريم بأحجام مختلفة",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "طوس بلاستيكية متينة بلون شفاف صناعة سورية",
    "image": "135.jpg",
     "variantGroups": [
      {
        "id": "size",
        "name": "السعة",
        "options": [
          { "id": "no-lid",   "name": "200cc ", "price": 0,   "image": "136.jpg" },
          { "id": "with-lid", "name": " 350cc",   "price": 0, "image": "135.jpg" },
           
          
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]

  },
   {
    "id": "p137",
    "name": "كاسة كريستال للحلويات",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 0,
    "desc": "كاسة كريستال للحويات (تميز بطريقة تقديم الحلويات) صناعة سورية",
    "image": "137.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        // { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "137.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "137.jpg" }
        ]
      },
    ]
    
  },
  {
    "id": "p138",
    "name": "كاسة كرستال للحلويات",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 0,
    "desc": "كاسة كريستال للحويات (تميز بطريقة تقديم الحلويات) صناعة سورية",
    "image": "138.jpg",
   "hasLidOption": false,
    "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "138.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "138.jpg" }
        ]
      },
    ]
  },
   {
    "id": "p139",
    "name": " كاسة  شفافة 100ملي",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 0,
    "desc": "كاسة شفافة قياس 100ملي (صنتعة شركة البدر) صناعة سورية",
    "image": "139.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "139.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "139.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "139.jpg"}
        ]
      },
    ]
  },
   {
    "id": "p140",
    "name": "كاسة  شفافة 200ملي",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 0,
    "desc": "كاسة شفافة قياس 200ملي (صناعة شركة خلوف) صناعة سورية",
    "image": "140.jpg",
   "hasLidOption": false,
    "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        // { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "140.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "140.jpg" }
        ]
      },
    ]
  },
   {
    "id": "p141",
    "name": "كاسة  شفافة 350ملي",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 0,
    "desc": "كاسة شفافة قياس 350ملي (صنتعة شركة خلوف) صناعة سورية",
    "image": "141.jpg",
   "hasLidOption": false,
    "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "141.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "141.jpg" }
        ]
      },
    ]
  },
   {
    "id": "p150",
    "name": "كاسة قهوة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 0,
    "desc": "كاسة قهوة (شركة خلوف) مطابقة لمعايير الصحة صناعة سورية",
    "image": "150.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "150.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,"image": "150.jpg"  }
        ]
      },
    ]
  },
  {
    "id": "p151",
    "name": "علب عسل ",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "علب كريستال شفافة مصنعة وفق المعايير الصحية وصالحة للمنتجات الغذائية صناعة سورية",
    "image": "151.jpg",
    "variantGroups": [
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "2 kg", "price": 0,   "image": "152.jpg" },
          { "id": "with-lid", "name": "1 kg ",   "price": 0, "image": "153.jpg" },
          { "id": "lid-only", "name": "0.5 kg",  "price": 0, "image": "154.jpg" },
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 40,  }
        ]
      },
    ]
    
  },
   {
    "id": "p155",
    "name": "علب بلاستك مدورة مع غطاء",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "علب كريستال مدورة صالحة للإستخدام الغذائي توافق المعايير الصحية صناعة سورية",
    "image": "155.jpg",
    "variantGroups": [
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "6", "price": 0,   "image": "158.jpg" },
          { "id": "with-lid", "name": "7 ",   "price": 0, "image": "157.jpg" },
          { "id": "lid-only", "name": "8",  "price": 0, "image": "156.jpg" },
        
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 30,  }
        ]
      },
    ]
    
  },
   {
    "id": "p159",
    "name": "صحون بلاستك حليبي بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن حليبي مستطيل من شركة الجمال جودة ومتانة عالية يأتي بثلاث أحجام مختلفة صناعة سورية",
    "image": "159.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "1 kg", "price": 0,   "image": "159.jpg"  },
          { "id": "with-lid", "name": "0.5 kg ",   "price": 2.5, "image": "160.jpg"},
          { "id": "lid-only", "name": "0.25 kg",  "price": 2.5, "image": "161.jpg",  }
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
   {
    "id": "p162",
    "name": "صحون بلاستك مدور حليبي بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن بلاستك مدور حليبي من شركة الجمال قوي ومتين صناعة سورية",
    "image": "162.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "1 kg", "price": 0,   "image": "162.jpg"  },
          { "id": "with-lid", "name": "0.5 kg ",   "price": 0, "image": "163.jpg"},
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
    "id": "p164",
    "name": "علب بلاستك مدورة مع غطاء",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "علب غرافيت متينة مقاومة للماء، محكمة الإغلاق وأنيقة المظهر توافق المعايير الصحية صناعة سورية",
    "image": "164.jpg",
    "variantGroups": [
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "2 kg", "price": 0,   "image": "164.jpg" },
          { "id": "with-lid", "name": "1 kg",   "price": 0, "image": "165.jpg" },
        
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 30,  }
        ]
      },
    ]
    
  }, 
    {
    "id": "p166",
    "name": "صحون بلاستك شمس شفاف بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن بلاستك مدور حليبي من شركة الجمال قوي ومتين توافق المعايير الصحية صناعة سورية",
    "image": "166.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "2 kg", "price": 0,   "image": "166.jpg"  },
          { "id": "with-lid", "name": "1 kg ",   "price": 0, "image": "167.jpg"},
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
    "id": "p168",
    "name": "صحون بلاستك شمس ذهبي بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن بلاستك مدور حليبي من شركة الجمال قوي ومتين يوافق المعايير الصحية صناعة سورية",
    "image": "168.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "2 kg", "price": 0,   "image": "168.jpg"  },
          { "id": "with-lid", "name": "1 kg ",   "price": 0, "image": "169.jpg"},
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
     "id": "p170",
    "name": "صحون بلاستك شمس أسود",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن بلاستك مدور حليبي من شركة الجمال قوي ومتين يوافق المعايير الصحية صناعة سورية",
    "image": "170.jpg",

    "badge": "",
    "overlay": false,
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
   {
     "id": "p171",
    "name": "صحون بلاستك وردة شفافة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن بلاستك مدور حليبي من شركة الجمال قوي ومتين يوافق المعايير الصحية صناعة سورية",
    "image": "171.jpg",

    "badge": "",
    "overlay": false,
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "171.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "171.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "171.jpg"}
        ]
      },
    ]
  },
   {
    "id": "p172",
    "name": "صحون بلاستك مقرقش بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن بلاستك مدور حليبي من شركة الجمال قوي ومتين  صناعة سورية",
    "image": "172.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "1 kg", "price": 0,   "image": "172.jpg"  },
          { "id": "with-lid", "name": "0.5 kg ",   "price": 0, "image": "173.jpg"},
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
   {
    "id": "p174",
    "name": "صحن بلاستك مستطيل شفاف بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن بلاستك مدور حليبي من شركة الجمال قوي ومتين يوافق المعايير الصحية صناعة سورية",
    "image": "174.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "1 kg", "price": 0,   "image": "174.jpg"  },
          { "id": "with-lid", "name": "0.5 kg ",   "price": 0, "image": "175.jpg"},
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
   {
    "id": "p176",
    "name": "صحون بلاستك مدور شفاف بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن بلاستك مدور حليبي من شركة الجمال قوي ومتين يوافق المعايير الصحية",
    "image": "176.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "2 kg", "price": 0,   "image": "176.jpg"  },
          { "id": "with-lid", "name": "1 kg ",   "price": 0, "image": "177.jpg"},
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
   {
     "id": "p178",
    "name": "منسف شمس كريستال",
    "category": "bool",
    "sub": "mnsaf",
    "price": 4.5,
    "desc": "منسف كريستال مدور حليبي من شركة الجمال قوي ومتين يوافق المعايير الصحية صناعة سورية",
    "image": "178.jpg",

    "badge": "",
    "overlay": false,
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "178.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "178.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "178.jpg" }
        ]
      },
    ]
  },
   {
    "id": "p179",
    "name": " غطاء قبة D2 غير مثقب",
    "category": "coffee-cups",
    "sub": "lid",
    "price": 0,
    "desc": "غطاء قبة غير مثقب يوافق المعايير الصحية صناعة سورية",
    "image": "179.jpg",
    "badge": "",
     "hasLidOption": false,
      "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "179.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "179.jpg"}
        ]
      },
    ]
  },
   {
    "id": "p180",
    "name": " غطاء قبة 00D1 مثقب",
    "category": "coffee-cups",
    "sub": "lid",
    "price": 0,
    "desc": "غطاء قبة مثقب يوافق المعايير الصحية صناعة سورية",
    "image": "180.jpg",
    "badge": "",
     "hasLidOption": false,
      "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "180.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "180.jpg" }
        ]
      },
    ]
  },
   {
    "id": "p181",
    "name": " غطاء قبة 00D2 مثقب",
    "category": "coffee-cups",
    "sub": "lid",
    "price": 0,
    "desc": "غطاء قبة مثقب يوافق المعايير الصحية صناعة سورية",
    "image": "181.jpg",
    "badge": "",
     "hasLidOption": false,
      "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          //{ "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "181.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,"image": "181.jpg"  }
        ]
      },
    ]
  },
   {
    "id": "p182",
    "name": " غطاء مسطح 00F2 مثقب",
    "category": "coffee-cups",
    "sub": "lid",
    "price": 0,
    "desc": "غطاء مسطح مثقب يوافق المعايير الصحية صناعة سورية",
    "image": "182.jpg",
    "badge": "",
     "hasLidOption": false,
      "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "182.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "182.jpg" }
        ]
      },
    ]
  },
    {
    "id": "p183",
    "name": "كاسات شفاف بأحجام مختلفة",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 8.99,
    "desc": "كاسات شفاف من شركة المتين توافق المعايير الصحية صناعة سورية",
    "image": "183.jpg",
    "badge": "",
    "overlay": false,
    // ★ مثال حي على نظام "variantGroups" (المجموعات القابلة للدمج) — راجع
    // الشرح الكامل فوق تعريف دالة getVariantGroups() بالجافاسكربت (ابحث
    // عن كلمة "variantGroups"). العميل هون يقدر يختار زر واحد من كل
    // مجموعة بنفس الوقت (مثال: بدون غطاء + مقاس 4 + قطعة مفردة).
    "variantGroups": [
     
      {
        
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "TPS85--500cc", "price": 9.99, "image": "183.jpg" },
          { "id": "size-6", "name": "TPS84--400cc", "price": 7.99, "image": "184.jpg" },
          { "id": "size-4", "name": "TPS83--350cc", "price": 6.49, "image": "185.jpg" },
          { "id": "size-3", "name": "TPS82--300cc", "price": 6.49, "image": "186.jpg" },
          { "id": "size-2", "name": "TPS81--270cc", "price": 6.49, "image": "187.jpg" }
        ]
      },
      {
      
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "" },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "",  },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "",}
        ]
      },
    ]
  },
  {
     "id": "p188",
    "name": "كاسة شفاف قياس 150 مل",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 0,
    "desc": "كاسات شفاف من شركة البدر قياس 150 مل توافق المعايير الصحية صناعة سورية",
    "image": "188.jpg",
    "badge": "",
    "overlay": false,
     "hasLidOption": false,
      "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "188.jpg"},
          { "id": "carton", "name": "طرد",         "price": 340, "image": "188.jpg" }
        ]
      },
    ]
  },
   {
     "id": "p189",
    "name": "كاسة كرتون مقاس 16 أونص ",
    "category": "coffee-cups",
    "sub": "no-lid",
    "price": 0,
    "desc": "كاسة كرتون من شركة القنواتي مقاس 16 أونص توافق المعايير الصحية صناعة سورية",
    "image": "189.jpg",
    "badge": "",
    "overlay": false,
     "hasLidOption": false,
      "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "279.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "189.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "189.jpg" }
        ]
      },
    ]
  },
   {
    "id": "p190",
    "name": "قصدير الزوادة",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "رول قصدير منزلي لتغليف الأغذية من شركة الزوادة يوافق المعايير الصحية صناعة سورية",
    "image": "190.jpg",
    "hasLidOption": false,
      "variantGroups": [
     
      {
        
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "5*30", "price": 9.99, "image": "190.jpg" },
          { "id": "size-6", "name": "3*45", "price": 7.99, "image": "190.jpg" },
        ]
      },
      {
      
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "" },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  "image": "",  },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "",}
        ]
      },
    ]
  },
   {
    "id": "p211",
    "name": "صحن كرتون مسلفن وجهة علوي ",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن كرتون مسلفن وجهة علوي يوافق المعايير الصحية صناعة سورية",
    "image": "211.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "3 kg", "price": 0,   "image": "211.jpg"  },
          { "id": "with-lid", "name": "2 kg ",   "price": 0, "image": "212.jpg"},
           { "id": "1-lid", "name": "1 kg ",   "price": 0, "image": "213.jpg"},
            { "id": "2-lid", "name": "0.5 kg ",   "price": 0, "image": "214.jpg"},
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
   {
    "id": "p215",
    "name": "صحن كرتون أبيض وجهين بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن كرتون أبيض وجهين يوافق المعايير الصحية صناعة سورية",
    "image": "215.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "3 kg", "price": 0,   "image": "215.jpg"  },
          { "id": "with-lid", "name": "2 kg ",   "price": 0, "image": "216.jpg"},
           { "id": "1-lid", "name": "1 kg ",   "price": 0, "image": "217.jpg"},
            { "id": "2-lid", "name": "0.5 kg ",   "price": 0, "image": "218.jpg"},
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  }, {
    "id": "p219",
    "name": "صحن كرتون مسلفن وجهين بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحن كرتون مسلفن وجهين يتوافق مع المعايير الصحية صناعة سورية",
    "image": "219.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "3 kg", "price": 0,   "image": "219.jpg"  },
          { "id": "with-lid", "name": "2 kg ",   "price": 0, "image": "220.jpg"},
           { "id": "1-lid", "name": "1 kg ",   "price": 0, "image": "221.jpg"},
            { "id": "2-lid", "name": "0.5 kg ",   "price": 0, "image": "222.jpg"},
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
   {
    "id": "p223",
    "name": "كيس منقط أسود متعدد الأحجام",
    "category": "bags",
    "sub": "gift_bags",
    "price": 0,
    "desc": "كيس منقط أسود صناعة سورية",
    "image": "223.jpg",
    "hasLidOption": false,
      "variantGroups": [
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "0", "price": 0,   "image": "223.jpg" },
          { "id": "with-lid", "name": " 1",   "price": 0, "image": "224.jpg" },
           { "id": "-lid", "name": " 2",   "price": 0, "image": "225.jpg" },
            { "id": "1-lid", "name": " 3 ",   "price": 0, "image": "226.jpg" },
             { "id": "2-lid", "name": " 4 ",   "price": 0, "image": "227.1.jpg" },
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  },
          { "id": "carton", "name": "طرد",         "price": 0, }
        ]
      },
    ]
  },
   {
    "id": "p227",
    "name": "كيس مطبوع الراقي متعدد الأحجام",
    "category": "bags",
    "sub": "gift_bags",
    "price": 0,
    "desc": "كيس مطبوع من شركة الراقي صناعة سورية",
    "image": "227.jpg",
    "hasLidOption": false,
      "variantGroups": [
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "60", "price": 0,   "image": "227.jpg" },
          { "id": "with-lid", "name": " 55",   "price": 0, "image": "228.jpg" },
           { "id": "-lid", "name": " 50",   "price": 0, "image": "229.jpg" },
            { "id": "1-lid", "name": " 45 ",   "price": 0, "image": "230.jpg" },
             { "id": "2-lid", "name": " 40 ",   "price": 0, "image": "231.jpg" },
               { "id": "3-lid", "name": " 35 ",   "price": 0, "image": "232.jpg" },
                 { "id": "4-lid", "name": " 30 ",   "price": 0, "image": "233.jpg" },
                   { "id": "5-lid", "name": " 25 ",   "price": 0, "image": "234.jpg" },
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  },
          { "id": "carton", "name": "طرد",         "price": 0, }
        ]
      },
    ]
  },
    {
    "id": "p235",
    "name": "كيس منقط أبيض عرايسي متعدد الأحجام",
    "category": "bags",
    "sub": "gift_bags",
    "price": 0,
    "desc": "كيس منقط أبيض عرايسي من شركة الراقي صناعة سورية",
    "image": "235.jpg",
    "hasLidOption": false,
      "variantGroups": [
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "كبير", "price": 0,   "image": "235.jpg" },
          { "id": "with-lid", "name": " صغير",   "price": 0, "image": "236.jpg" },
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  },
          { "id": "carton", "name": "طرد",         "price": 0, }
        ]
      },
    ]
  },
     {
    "id": "p237",
    "name": "أكياس منقط أبيض متعدد الأحجام",
    "category": "bags",
    "sub": "gift_bags",
    "price": 0,
    "desc": "كيس أبيض منقط من شركة الفرات صناعة سورية",
    "image": "237.jpg",
    "hasLidOption": false,
      "variantGroups": [
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "4", "price": 0,   "image": "237.jpg" },
          { "id": "with-lid", "name": " 3",   "price": 0, "image": "238.jpg" },
           { "id": "-lid", "name": " 2",   "price": 0, "image": "239.jpg" },
            { "id": "1-lid", "name": " 1 ",   "price": 0, "image": "240.jpg" },
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  },
          { "id": "carton", "name": "طرد",         "price": 0, }
        ]
      },
    ]
  },
  {
    "id": "p241",
    "name": "كيس مطبوع ويلكم متعدد الأحجام",
    "category": "bags",
    "sub": "gift_bags",
    "price": 0,
    "desc": "كيس مطبوع قوي ومتين بقياسات متعددة",
    "image": "241.jpg",
    "hasLidOption": false,
      "variantGroups": [
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "55", "price": 0,   "image": "241.jpg" },
          { "id": "with-lid", "name": " 50",   "price": 0, "image": "242.jpg" },
           { "id": "-lid", "name": " 45",   "price": 0, "image": "243.jpg" },
            { "id": "1-lid", "name": " 40 ",   "price": 0, "image": "244.jpg" },
             { "id": "2-lid", "name": " 35 ",   "price": 0, "image": "245.jpg" },
               { "id": "3-lid", "name": " 30 ",   "price": 0, "image": "246.jpg" },
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  },
          { "id": "carton", "name": "طرد",         "price": 0, }
        ]
      },
    ]
  },
   {
    "id": "p248",
    "name": "كيس  سادة متعدد الأحجام",
    "category": "bags",
    "sub": "gift_bags",
    "price": 0,
    "desc": "كيس أسود سادة قوي ومتين ",
    "image": "248.jpg",
    "hasLidOption": false,
      "variantGroups": [
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "قياس0", "price": 0,   "image": "247.jpg" },
          { "id": "with-lid", "name": " قياس1",   "price": 0, "image": "248.jpg" },
           { "id": "-lid", "name": "قياس2",   "price": 0, "image": "249.jpg" },
            { "id": "1-lid", "name": " قياس3",   "price": 0, "image": "250.jpg" },
             { "id": "2-lid", "name": "قياس4",   "price": 0, "image": "251.jpg" },
              
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  },
          { "id": "carton", "name": "طرد",         "price": 0, }
        ]
      },
    ]
  },
  {
    "id": "p252",
    "name": "كيس  نايلون لحفظ الأغذية متعدد الأحجام",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 0,
    "desc": "أكياس نايلون صحية متعددة الأحجام",
    "image": "252.jpg",
    "hasLidOption": false,
      "variantGroups": [
      {
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "   40*60", "price": 0,   "image": "252.jpg" },
          { "id": "with-lid", "name": " 35*50 ",   "price": 0, "image": "253.jpg" },
           { "id": "-lid", "name": "35*45",   "price": 0, "image": "254.jpg" },
            { "id": "1", "name": "30*40 ",   "price": 0, "image": "255.jpg" },
             { "id": "3", "name": "25*40",   "price": 0, "image": "256.jpg" },
             { "id": "4", "name": "25*35",   "price": 0, "image": "257.jpg" },
             { "id": "5", "name": "20*30",   "price": 0, "image": "258.jpg" },
             { "id": "6", "name": "15*25",   "price": 0, "image": "259.jpg" },
             { "id": "7", "name": "12*20",   "price": 0, "image": "260.jpg" },
             { "id": "8-", "name": "10*20",   "price": 0, "image": "261.jpg" },
             { "id": "9-", "name": "12*15",   "price": 0, "image": "262.jpg" },
              
        ]
      },
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   },
          { "id": "dozen",  "name": "دزينة",       "price": 0,  },
          { "id": "carton", "name": "طرد",         "price": 0, }
        ]
      },
    ]
  },
  {
    "id": "p263",
    "name": "    أكياس شتلات      ",
    "category": "bags",
    "sub": "0_bags",
    "price": 26.5,
    "desc": "كيس نايلون زراعي مثقب بأحجام مختلفة",
    "image": "263.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "263.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "263.jpg" }
        ]
      },
    ]
  },
   {
    "id": "p264",
    "name": "صحون بيتزا فلين بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحون بيتزا فلين بجودة عالية من شركة الإحسان",
    "image": "264.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "جامبو", "price": 0,   "image": "264.jpg"  },
          { "id": "with-lid", "name": "كبير ",   "price": 2.5, "image": "265.jpg"},
          { "id": "lid-only", "name": "وسط",  "price": 2.5, "image": "266.jpg",  },
          { "id": "lid-", "name": "صغير",  "price": 2.5, "image": "267.jpg",  }
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
    "id": "p268",
    "name": "صحون برغر فلين بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحون برغر فلين بجودة عالية من شركة الزهير",
    "image": "268.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "كبير", "price": 0,   "image": "268.jpg"  },
          { "id": "with-lid", "name": "وسط ",   "price": 2.5, "image": "269.jpg"},
          { "id": "lid-only", "name": "صغير",  "price": 2.5, "image": "270.jpg",  },
         
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
    "id": "p271",
    "name": "صحون  فلين بأحجام مختلفة",
    "category": "bool",
    "sub": "plates",
    "price": 4.5,
    "desc": "صحون  فلين بجودة عالية من شركة الزهير",
    "image": "271.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "كبير", "price": 0,   "image": "271.jpg"  },
          { "id": "with-lid", "name": "وسط ",   "price": 2.5, "image": "272.jpg"},
          { "id": "lid-only", "name": "صغير",  "price": 2.5, "image": "273.jpg",  },
         
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
   {
    "id": "p274",
    "name": " كيس حراري ",
    "category": "bags",
    "sub": "healthy_bags",
    "price": 26.5,
    "desc": "كيس حراري عالي الجودة.",
    "image": "274.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "274.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "274.jpg" }
        ]
      },
    ]
  },
    {
    "id": "p275",
    "name": "مناسف  فلين بأحجام مختلفة",
    "category": "bool",
    "sub": "mnsaf",
    "price": 4.5,
    "desc": "مناسف  فلين بجودة عالية من شركة الإحسان",
    "image": "275.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "كبير", "price": 0,   "image": "275.jpg"  },
          { "id": "with-lid", "name": "وسط ",   "price": 2.5, "image": "276.jpg"},
          { "id": "lid-only", "name": "صغير",  "price": 2.5, "image": "277.jpg",  },
         
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
   {
    "id": "p278",
    "name": "صحن فول الإحسان  ",
    "category": "bool",
    "sub": "plates",
    "price": 19.99,
    "desc": "صحن فول بجودة عالية من شركة الإحسان",
    "image": "278.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "278.jpg"  },
          { "id": "carton", "name": "طرد",         "price": 340,"image": "278.jpg"  }
        ]
      },
    ]
  },
    {
    "id": "p279",
    "name": "صحن فول الزهير  ",
    "category": "bool",
    "sub": "plates",
    "price": 19.99,
    "desc": "صحن فول بجودة عالية من شركة الزهير",
    "image": "279.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,    "image": "284.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   "image": "279.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,  "image": "279.jpg" }
        ]
      },
    ]

  },
  {
    "id": "p280",
    "name": "مناسف  فلين بأحجام مختلفة",
    "category": "bool",
    "sub": "mnsaf",
    "price": 4.5,
    "desc": "مناسف  فلين بجودة عالية من شركة لمسات",
    "image": "280.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "كبير", "price": 0,   "image": "280.jpg"  },
          { "id": "with-lid", "name": "وسط ",   "price": 2.5, "image": "281.jpg"},
         
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
    "id": "p282",
    "name": " ورق نفاش سميك",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "ورق نفاش سميك بجودة عالية",
    "image": "282.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,   "image": "282.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   "image": "282.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,   "image": "282.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p283",
    "name": " ورق نفاش رقيق",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "ورق نفاش رقيق بجودة عالية",
    "image": "283.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    "image": "283.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   "image": "283.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340,   "image": "283.jpg" }
        ]
      },
    ]
  },
   {
    "id": "p284",
    "name": "فوطة المطبخ المايكرو كلين (4 قطع)",
    "category": "clean",
    "sub": "mamaseh",
    "price": 26.5,
    "desc": "    فوطة مطبخ مبطنة، ناعمة على الأسطح وقوية على الأوساخ (4 قطع)    ",
    "image": "284.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "284.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "284.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "284.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p285",
    "name": " علب بيوتي بأحجام مخلتفة ",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "",
    "image": "285.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "الغطاء",
        "options": [
          { "id": "no-lid",   "name": "قياس570--2000cc ", "price": 0,   "image": "285.jpg"  },
          { "id": "with", "name": "قياس 500 --2000cc",   "price": 2.5, "image": "286.jpg"},
          { "id": "wi", "name": "قياس 501-- 1500cc ",   "price": 2.5, "image": "287.jpg"},
          { "id": "wi", "name": "قياس 502 --1000cc ",   "price": 2.5, "image": "288.jpg"},
          { "id": "w", "name": "قياس 532 --500cc ",   "price": 2.5, "image": "289.jpg"},
          { "id": "w1", "name": "قياس 647--250cc ",   "price": 2.5, "image": "290.jpg"},
          { "id": "w2", "name": "قياس646-- 150cc ",   "price": 2.5, "image": "291.jpg"},
         
        ]
      },
      /*{
        "id": "size",
        "name": "المقاس",
        "options": [
          { "id": "size-9", "name": "مقاس 9", "price": 9.99, "image": "45.jpg" },
          { "id": "size-6", "name": "مقاس 6", "price": 7.99, "image": "45.jpg" },
          { "id": "size-4", "name": "مقاس 4", "price": 6.49, "image": "45.jpg" }
        ]
      },*/
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
     "id": "p292",
    "name": "ورق أرضيات سيارات مطبوع",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "قوالب كب كيك ورقية، تأتي بثلاثة أحجام: كبيرة، وسط، وصغيرة.",
    "image": "292.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
         // { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "292.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "292.jpg" }
        ]
      },
    ]
  },
   {
     "id": "p293",
    "name": "ورق أرضيات سيارات غير مطبوع",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "قوالب كب كيك ورقية، تأتي بثلاثة أحجام: كبيرة، وسط، وصغيرة.",
    "image": "293.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          //{ "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "293.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "293.jpg" }
        ]
      },
    ]
  },
  {
    "id": "p294",
    "name": " علب صدفية بأحجام مخلتفة ",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "",
    "image": "294.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "TPS14--1500cc ", "price": 0,   "image": "294.jpg"  },
          { "id": "with", "name": "TPS22--500cc",   "price": 2.5, "image": "295.jpg"},
          { "id": "_with", "name": "TPS24--100cc",   "price": 2.5, "image": "296.jpg"},
         
         
        ]
      },
     
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
     "id": "p297",
    "name": " علبة فواكة ",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "علبة فواكة إنتاج شركة المتين تأتي بمقاس TPS 52 وسعة 1000cc",
    "image": "297.jpg",

    "badge": "",
    "overlay": false,
    "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "297.jpg"   },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "297.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "297.jpg" }
        ]
      },
    ]

  },
   {
    "id": "p298",
    "name": "مريول نايلون شفاف ",
    "category": "plastic",
    "sub": "golves",
    "price": 0,
    "desc": "مريول نايلون شفاف لحماية الملابس من الزيوت والاطعمة",
    "image": "298.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95, "image": "298.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "298.jpg" }
        ]
      },
    ]

    
  },
  {
     "id": "p299",
    "name": "ورق كيك شفاف",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "قوالب كب كيك ورقية، تأتي بثلاثة أحجام: كبيرة، وسط، وصغيرة.",
    "image": "299.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "299.jpg"    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "299.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "299.jpg" }
        ]
      },
    ]
  },
  {
     "id": "p300",
    "name": "ورق قصدير مبطن",
    "category": "wrapping",
    "sub": "rolls-paper",
    "price": 26.5,
    "desc": "قوالب كب كيك ورقية، تأتي بثلاثة أحجام: كبيرة، وسط، وصغيرة.",
    "image": "300.jpg",
    "hasLidOption": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
        //  { "id": "piece",  "name": "قطعة مفردة", "price": 0,     },
          { "id": "dozen",  "name": "دزينة",       "price": 95,  },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]
  },
  {
     "id": "p304",
    "name": "  علب وجبات بغطاء ",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "علبة طعام من شركة الخلوف توافق المعايير الصحية صناعة سورية",
    "image": "304.jpg",

    "badge": "",
    "overlay": false,
     "variantGroups": [
      {
        "id": "lid",
        "name": "المقاس",
        "options": [
          { "id": "no-lid",   "name": "مقطع ", "price": 0,   "image": "304.jpg"  },
          { "id": "with", "name": "غير مقطع (سادة)",   "price": 2.5, "image": "305.jpg"},
        ]
      },
     
      {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,    },
          { "id": "dozen",  "name": "دزينة",       "price": 95,   },
          { "id": "carton", "name": "طرد",         "price": 340,  }
        ]
      },
    ]

  },
 
   {
     "id": "p306",
    "name": " علب وجبات بغطاء ",
    "category": "plastic",
    "sub": "containers",
    "price": 4.5,
    "desc": "علبة طعام من  شركة القنواتي توافق المعايير الصحية صناعة سورية",
    "image": "306.jpg",

    "badge": "",
    "overlay": false,
     "variantGroups": [
       {
        "id": "packaging",
        "name": "الكمية",
        "options": [
          { "id": "piece",  "name": "قطعة مفردة", "price": 0,  "image": "306.jpg"  },
          { "id": "dozen",  "name": "دزينة",       "price": 95,"image": "306.jpg" },
          { "id": "carton", "name": "طرد",         "price": 340, "image": "306.jpg" }
        ]
      },
    ]

  },
  
  



  

 
];

/* ================================================================
   الحالة (State)
   ================================================================ */
const CART_STORAGE_KEY = "boshi_cart"; // مفتاح تخزين السلة في المتصفح

function loadCart(){
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    // تعديل: توافق مع سلات قديمة محفوظة قبل إضافة خيار الغطاء (لم يكن
    // لديها حقل "lid") — نفترض لها "بدون غطاء" حتى لا يتعطل السعر.
    return parsed.map(item => ({ ...item, lid: item.lid || "no-lid" }));
  } catch (e){
    return [];
  }
}

function saveCart(){
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e){
    // تجاهل أي خطأ في التخزين (مثلاً وضع التصفح الخفي)
  }
}

/* تعديل (جديد — نافذة تفاصيل المنتج):
   أصبح كل عنصر في السلة يحمل حقل "lid" إضافي يحدد خيار الغطاء
   المختار لهذا السطر: "no-lid" (بدون غطاء) أو "with-lid" (مع غطاء).
   الشكل الآن: { id, qty, lid }.
   لأن نفس المنتج قد يُضاف مرة "بدون غطاء" ومرة "مع غطاء"، نستخدم
   مفتاحًا مركّبًا lineKey = `${id}__${lid}` لتمييز كل سطر في السلة
   عن الآخر (راجع دالة lineKey() ودالة findCartLine() بالأسفل). */
let cart = loadCart();        // { id, qty, lid } — تُحمّل من التخزين المحلي إن وُجدت
let activeCategory = null;    // null = عرض كل الفئات الرئيسية
let activeSub = null;         // null = عرض أفرع الفئة الرئيسية المختارة
let searchQuery = "";

/* ================================================================
   تعديل (جديد كبير): نظام "الخيارات/الأزرار" العام لكل منتج (Variants)
   ================================================================
   بدل نظام "بدون غطاء / بغطاء" الثابت بس، أصبح أي منتج قادر يملك أي
   عدد من الأزرار (غطاء فقط، دزينة، طرد، مقاس 9، مقاس 6، مقاس 4، ...)
   كل زر له اسمه وسعره وصورته الخاصة، عن طريق حقل "variants" بمصفوفة
   PRODUCTS (شوف مثال المنتج p1 تحت لطريقة الاستخدام بالتفصيل).

   دالة getProductVariants(product) هي المصدر الوحيد لكل الأزرار:
   - إذا كان عند المنتج مصفوفة variants (بها عنصر واحد على الأقل) تُستخدم
     هي كما هي (كل عنصر: id, name, price, image).
   - إذا لم تكن موجودة، نبني تلقائيًا أزرار "بدون غطاء/بغطاء" القديمة
     من نفس الحقول القديمة (price + lidSurcharge + imageNoLid/imageWithLid
     + lidNoLabel/lidWithLabel) حتى تبقى كل المنتجات القديمة تعمل بدون
     أي تعديل عليها. وإذا كان hasLidOption:false يُرجع خيارًا واحدًا فقط
     (بدون أي زيادة سعر).
   ================================================================ */
// الرقم الافتراضي لزيادة "مع غطاء" — يُستخدم فقط للمنتجات القديمة التي
// ما عندها مصفوفة variants ولا حقل lidSurcharge خاص بها.
const DEFAULT_LID_SURCHARGE = 2.00;

function getProductVariants(product){
  // 1) نظام الأزرار المخصص (الجديد) — إن وُجد نستخدمه مباشرة كما هو
  if (Array.isArray(product.variants) && product.variants.length > 0){
    return product.variants.map(v => ({
      id: v.id,
      name: v.name,
      price: v.price,
      image: v.image || product.image
    }));
  }
  // 2) منتج بلا أي خيار غطاء إطلاقًا (hasLidOption:false) → خيار واحد بس
  if (product.hasLidOption === false){
    return [{ id: "no-lid", name: product.lidNoLabel || "بدون غطاء", price: product.price, image: product.image }];
  }
  // 3) التوافق مع النظام القديم (بدون غطاء / بغطاء) لأي منتج بلا variants
  const surcharge = product.lidSurcharge !== undefined ? product.lidSurcharge : DEFAULT_LID_SURCHARGE;
  return [
    { id: "no-lid",   name: product.lidNoLabel   || "بدون غطاء", price: product.price,             image: product.imageNoLid   || product.image },
    { id: "with-lid", name: product.lidWithLabel || "بغطاء",     price: product.price + surcharge, image: product.imageWithLid || product.image },
  ];
}

/* ================================================================
   ★★★ تعديل (جديد كبير): "مجموعات" خيارات يمكن دمجها مع بعضها ★★★
   ================================================================
   قبل هذا التعديل، كانت كل أزرار المنتج (بدون غطاء / مع غطاء / غطاء
   فقط / دزينة / طرد / مقاس 9 / مقاس 6 / مقاس 4 ...) بقائمة واحدة
   يُختار منها زر واحد بس في نفس الوقت.

   الآن صار ممكن تقسيم أزرار أي منتج إلى عدة "مجموعات" منفصلة، ويختار
   العميل زر واحد من كل مجموعة بنفس الوقت، فتُدمج الاختيارات مع بعضها.
   مثال منطقي (مطابق لمنتج القهوة p1 بالأسفل):
     - مجموعة "الغطاء"  → بدون غطاء / مع غطاء / غطاء فقط
     - مجموعة "المقاس"  → مقاس 9 / مقاس 6 / مقاس 4
     - مجموعة "الكمية"  → قطعة مفردة / دزينة / طرد
   فيصير العميل قادر يختار مثلًا: "بدون غطاء" + "مقاس 4" + "قطعة مفردة"
   بنفس الوقت، وتُجمع كل الأزرار المختارة لحساب السعر النهائي.

   كيف تُضيف مجموعات لمنتج:
   ------------------------------------------------------------------
   أضف لأي منتج بمصفوفة PRODUCTS حقل "variantGroups" (مصفوفة مجموعات)
   بدل حقل "variants" العادي (المكوّن من مجموعة واحدة فقط). كل مجموعة:

     id      → معرّف داخلي فريد للمجموعة (بدون فراغات، لا تكرره داخل
               نفس المنتج) — مثال: "lid", "size", "packaging".
     name    → العنوان الظاهر فوق أزرار هذه المجموعة (مثال: "الغطاء").
     options → مصفوفة الأزرار داخل هذه المجموعة، وكل زر له 4 حقول
               بالضبط مثل نظام "variants" القديم:
                 id    → معرّف فريد للزر داخل مجموعته (لا داعي يكون
                         فريدًا عبر كل المنتج، بس فريد داخل مجموعته هو).
                 name  → النص الظاهر على الزر.
                 price → قيمة هذا الزر (شوف "طريقة حساب السعر" بالأسفل
                         لفهم كيف تُستخدم هذه القيمة بالضبط).
                 image → (اختياري) صورة تظهر عند اختيار هذا الزر تحديدًا.
                 override → (اختياري، true/false) اشرحها بالتفصيل تحت.

   طريقة حساب السعر النهائي:
   ------------------------------------------------------------------
   1) الوضع العادي (بدون أي زر عليه override:true من ضمن الأزرار
      المختارة حاليًا): السعر النهائي = مجموع (price) كل الأزرار
      المختارة، زر واحد من كل مجموعة. مثال: لو "بدون غطاء" = 0 و
      "مقاس 9" = 9.99 و"قطعة مفردة" = 0 → السعر = 0+9.99+0 = 9.99$.
      بهذا الأسلوب تقدر تخلي مجموعة معينة (مثل "المقاس") تحمل السعر
      الأساسي الكامل، ومجموعة ثانية (مثل "الغطاء") تحمل فرق بسيط
      يُضاف فوقه (مثال: مع غطاء = +2.5).

   2) وضع "الاستبدال الكامل" (override:true): إذا كان أحد الأزرار
      المختارة (بأي مجموعة) عليه override:true، يصبح السعر النهائي
      = مجموع أسعار الأزرار المختارة التي عليها override:true فقط،
      ويتم تجاهل كل باقي المجموعات نهائيًا. هذا مفيد جدًا لأزرار مثل
      "دزينة" أو "طرد" أو "غطاء فقط" التي تمثل سعرًا ثابتًا بحد ذاته
      ولا علاقة له بالمقاس/الغطاء المختار — تمامًا كما كانت هذه
      الأزرار تعمل قبل هذا التعديل (سعر ثابت مستقل).
      ⚠️ ملاحظة: عند اختيار زر override، تظهر رسالة صغيرة تلقائيًا تحت
      السعر بالنافذة (راجع #variantOverrideNote بالجافاسكربت) توضّح
      للعميل أن هذا السعر ثابت بغض النظر عن باقي الأزرار المختارة.

   ملاحظات إضافية:
   ------------------------------------------------------------------
   - أول خيار بكل مجموعة = الخيار المختار تلقائيًا لتلك المجموعة عند
     فتح نافذة المنتج لأول مرة.
   - منتج بمجموعة واحدة فقط بداخلها زر واحد بس → لا تظهر له أي أزرار
     اختيار إطلاقًا بنافذته (تمامًا كالسابق).
   - أي منتج لم تضف له "variantGroups" يستمر يعمل تمامًا كما كان
     (نظام "variants" العادي، أو نظام "بدون غطاء/مع غطاء" الأقدم)
     دون أي تغيير عليه — الكود بالأسفل يدعم الحالتين معًا تلقائيًا.
   ================================================================ */

// دالة موحّدة: تُرجع "مجموعات" الخيارات لأي منتج، بغض النظر إن كان
// يستخدم النظام الجديد (variantGroups) أو القديم (variants/الغطاء).
// - إذا كان عند المنتج variantGroups تُرجع كما هي.
// - غير ذلك، تُغلّف نتيجة getProductVariants() القديمة بمجموعة واحدة
//   وهمية اسمها الداخلي "option" حتى تعمل بقية الدوال بالأسفل بنفس
//   الطريقة تمامًا مع كل المنتجات (القديمة والجديدة) دون أي تفريق.
function getVariantGroups(product){
  if (Array.isArray(product.variantGroups) && product.variantGroups.length > 0){
    return product.variantGroups;
  }
  return [{ id: "option", name: "اختر النوع", options: getProductVariants(product) }];
}

// فاصلان داخليان لبناء "معرّف مركّب" يجمع اختيار كل مجموعات المنتج
// بسلسلة نصية واحدة (تُستخدم لتمييز سطر السلة id="lid" كما كان سابقًا).
// لا داعي لتعديل هذين الفاصلين.
const VARIANT_GROUP_SEP = "|";
const VARIANT_PAIR_SEP  = ":";

// يبني المعرّف المركّب من اختيارات كل المجموعات: {groupId: optionId, ...}
// ملاحظة مهمة: لو كان عند المنتج مجموعة واحدة فقط (كل المنتجات القديمة)
// يبقى المعرّف كما كان تمامًا (بدون أي بادئة) حتى لا تنكسر السلة
// المحفوظة سابقًا بمتصفح العميل (localStorage) لأي منتج قديم.
function buildVariantId(groups, selection){
  if (groups.length === 1) return selection[groups[0].id];
  return groups.map(g => `${g.id}${VARIANT_PAIR_SEP}${selection[g.id]}`).join(VARIANT_GROUP_SEP);
}

// يفكّ المعرّف المركّب إلى {groupId: optionId, ...} — عكس buildVariantId()
function parseVariantId(groups, variantId){
  if (groups.length === 1) return { [groups[0].id]: variantId };
  const map = {};
  String(variantId || "").split(VARIANT_GROUP_SEP).forEach(pair => {
    const idx = pair.indexOf(VARIANT_PAIR_SEP);
    if (idx === -1) return;
    map[pair.slice(0, idx)] = pair.slice(idx + 1);
  });
  return map;
}

// يرجع الخيار المختار الفعلي (object) داخل كل مجموعة، حسب المعرّف المركّب.
// كل عنصر بالنتيجة: { group, option }
function getSelectedOptions(product, variantId){
  const groups = getVariantGroups(product);
  const selection = parseVariantId(groups, variantId);
  return groups.map(g => {
    const opt = g.options.find(o => o.id === selection[g.id]) || g.options[0];
    return { group: g, option: opt };
  });
}

// المعرّف المركّب الافتراضي لمنتج معيّن: أول خيار بكل مجموعة
function getDefaultVariantId(product){
  const groups = getVariantGroups(product);
  const selection = {};
  groups.forEach(g => { selection[g.id] = g.options[0].id; });
  return buildVariantId(groups, selection);
}

// يبحث عن خيار معيّن (بمعرّفه) داخل أزرار منتج معيّن، ويرجع أول خيار كبديل احتياطي
// (ما زالت موجودة لأي كود قديم قد يستدعيها لمنتج بمجموعة واحدة فقط)
function findVariant(product, variantId){
  const variants = getProductVariants(product);
  return variants.find(v => v.id === variantId) || variants[0];
}

// يحسب السعر الفعلي لسطر في السلة حسب كل الأزرار المختارة (بكل المجموعات)
// راجع الشرح الكامل لطريقة الحساب فوق تعريف getVariantGroups().
function getLineUnitPrice(product, lid){
  const chosen = getSelectedOptions(product, lid);
  const overrides = chosen.filter(c => c.option.override === true);
  if (overrides.length > 0){
    return overrides.reduce((sum, c) => sum + c.option.price, 0);
  }
  return chosen.reduce((sum, c) => sum + c.option.price, 0);
}

// يرجع الاسم الظاهر للخيار المختار (لعرضه بالسلة/ملخص الطلب/رسالة واتساب)
// لمنتج بأكثر من مجموعة، يجمع أسماء كل الأزرار المختارة بفاصلة "، "
// مثال: "بدون غطاء، مقاس 4، قطعة مفردة"
function getVariantLabel(product, lid){
  const chosen = getSelectedOptions(product, lid);
  return chosen.map(c => c.option.name).join("، ");
}

// هل من ضمن الأزرار المختارة حاليًا لمنتج معيّن زر واحد على الأقل عليه
// override:true؟ (تُستخدم لإظهار رسالة "السعر ثابت..." بنافذة المنتج)
function hasOverrideSelected(product, lid){
  return getSelectedOptions(product, lid).some(c => c.option.override === true);
}

// يبني مفتاحًا فريدًا لكل (منتج + خيار غطاء) لتمييز أسطر السلة عن بعضها.
function lineKey(id, lid){
  return `${id}__${lid}`;
}

// يبحث عن سطر موجود مسبقًا في السلة بنفس المنتج ونفس خيار الغطاء.
function findCartLine(id, lid){
  return cart.find(item => item.id === id && item.lid === lid);
}

/* ================================================================
   مراجع عناصر DOM
   ================================================================ */
const shopBreadcrumb = document.getElementById("shopBreadcrumb");
const productsGrid = document.getElementById("productsGrid");

/* تعديل (جديد — تدقيق شامل لمشكلة "القفز إلى الفوتر"):
   تحققنا من كامل الصفحة ولا يوجد أي id مكرر ولا أي href="#..." خاطئ يشير
   للفوتر عن طريق الغلط (الرابط الوحيد لـ #footer هو رابط "تواصل معنا" نفسه
   وهو مقصود). السبب الحقيقي الوحيد كان طريقة التمرير: scrollIntoView كانت
   أحيانًا "تُكمل" التمرير حتى نهاية الصفحة (الفوتر) إذا كانت شبكة المنتجات
   قصيرة. لضمان عدم تكرار ذلك نهائيًا، أصبح كل تمرير لقسم "المتجر" يمر من
   هذه الدالة الموحّدة بدل استدعاء scrollIntoView مباشرة في أكثر من مكان،
   وهي تحسب المكان الصحيح يدويًا مع مراعاة ارتفاع الهيدر الملتصق (sticky).
   إذا أردت تغيير سلوك التمرير مستقبلًا، عدّل هنا فقط في مكان واحد. */
function scrollToProducts(){
  const section = document.getElementById("products");
  const headerEl = document.querySelector(".site-header");
  const headerOffset = headerEl ? headerEl.offsetHeight : 0;
  const targetTop = section.getBoundingClientRect().top + window.scrollY - headerOffset - 12;
  window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
}
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
// تعديل (جديد): عناصر مربع كود الحسم وصفوف المجموع الفرعي/الحسم
const cartSummaryRowsEl = document.getElementById("cartSummaryRows");
const couponInputEl = document.getElementById("couponInput");
const applyCouponBtnEl = document.getElementById("applyCouponBtn");
const couponMsgEl = document.getElementById("couponMsg");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");
const checkoutModal = document.getElementById("checkoutModal");
const checkoutSummary = document.getElementById("checkoutSummary");

/* مراجع عناصر نافذة تفاصيل المنتج (Product Modal) */
const productModal        = document.getElementById("productModal");
const productModalImg     = document.getElementById("productModalImg");
const productModalTitle   = document.getElementById("productModalTitle");
const productModalPrice   = document.getElementById("productModalPrice");
const variantOverrideNote = document.getElementById("variantOverrideNote"); // رسالة "السعر ثابت..." — راجع updateModalPrice()
const productModalDesc    = document.getElementById("productModalDesc");
const lidOptionGroup      = document.getElementById("lidOptionGroup"); // الحاوية اللي فيها الأزرار، تُخفى بالكامل لمنتج له خيار واحد بس
const lidOptionCards      = document.getElementById("lidOptionCards"); // الحاوية اللي تُبنى فيها الأزرار ديناميكيًا
const productModalAddBtn  = document.getElementById("productModalAddBtn");

/* تعديل (جديد): صورة المنتج المكبّرة تُقرأ الآن مباشرة من الخيار (variant)
   المختار حاليًا عبر findVariant(product, lid).image — كل خيار يحمل صورته
   الخاصة به (أو صورة المنتج الافتراضية إن لم تُحدَّد له صورة). */

// تعديل (جديد): عناصر التحكم بالكمية داخل نافذة المنتج
const modalQtyInput       = document.getElementById("modalQtyInput");
const modalQtyDec         = document.getElementById("modalQtyDec");
const modalQtyInc         = document.getElementById("modalQtyInc");

// يحمل معرّف المنتج المعروض حاليًا داخل النافذة (null إن كانت مغلقة)
let currentModalProductId = null;
// ملاحظة: متغيّر اختيار الأزرار الفعلي أصبح الآن currentSelection
// (تعريفه بالأسفل قرب renderModalVariantOptions) — يدعم أكثر من مجموعة
// اختيار بنفس الوقت بدل نص واحد فقط كالسابق.
// تعديل (جديد): الكمية المختارة حاليًا داخل نافذة المنتج (تُعاد لـ 1 كل مرة تُفتح فيها)
let currentModalQty = 1;

document.getElementById("year").textContent = new Date().getFullYear();

/* ================================================================
   أدوات مساعدة للفئات
   ================================================================ */
function getCategory(id){ return CATEGORIES.find(c => c.id === id); }
function getSub(cat, subId){ return cat ? cat.subcategories.find(s => s.id === subId) : null; }
function categoryName(id){
  const cat = getCategory(id);
  return cat ? cat.name : id;
}
function subName(catId, subId){
  const cat = getCategory(catId);
  const sub = getSub(cat, subId);
  return sub ? sub.name : subId;
}

/* ================================================================
   المتحكم الرئيسي بالعرض
   تعديل (جديد حسب الطلب): الصفحة الرئيسية ترجع تعرض كل الأقسام مع
   بعضها كقائمة (بدون منتجات). بالضغط على قسم مُعيّن تظهر منتجات هذا
   القسم فقط، ومعها (إن وُجدت أفرع/أنواع مثل بغطاء/بدون غطاء/فقط غطاء)
   أزرار تبويب لتصفية النوع — كل هذا على نفس الشاشة دون الانتقال لصفحة
   منفصلة. البحث يبقى يعرض نتيجة مُصفّاة مسطّحة كما هو.
   ================================================================ */
function renderShop(){
  clearChunkSentinel();
  if (searchQuery.trim() !== ""){
    renderBreadcrumb([{ label: "نتائج البحث" }]);
    renderProductList(PRODUCTS.filter(p => matchesSearch(p, searchQuery)), true);
    return;
  }

  if (!activeCategory){
    renderBreadcrumb([{ label: "كل الأقسام" }]);
    renderCategoryGrid();
    return;
  }

  const cat = getCategory(activeCategory);
  if (!cat){ activeCategory = null; renderShop(); return; }

  renderBreadcrumb([
    { label: "كل الأقسام", onClick: () => { activeCategory = null; activeSub = null; renderShop(); } },
    { label: cat.name }
  ]);
  renderCategoryProducts(cat);
}

function matchesSearch(p, q){
  const query = q.toLowerCase();
  return p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
}

/* ================================================================
   عرض: مسار التنقّل (Breadcrumb)
   ================================================================ */
function renderBreadcrumb(trail){
  shopBreadcrumb.innerHTML = trail.map((t, i) => {
    const isLast = i === trail.length - 1;
    const sep = i > 0 ? `<span class="crumb-sep">/</span>` : "";
    if (isLast || !t.onClick){
      return `${sep}<span class="crumb-current">${t.label}</span>`;
    }
    return `${sep}<button class="crumb-link" data-idx="${i}">${t.label}</button>`;
  }).join("");

  shopBreadcrumb.querySelectorAll(".crumb-link").forEach((btn, i) => {
    btn.addEventListener("click", trail[i].onClick);
  });
}

/* ================================================================
   عرض: قائمة كل الأقسام الرئيسية (الشاشة الرئيسية للمتجر)
   ================================================================ */
function renderCategoryGrid(){
  // هذه القائمة تُبنى تلقائيًا بالكامل من مصفوفة CATEGORIES في الأعلى.
  productsGrid.className = "";

  let html = `<div class="category-list">` + CATEGORIES.map(cat => {
    const count = PRODUCTS.filter(p => p.category === cat.id).length;
    return `
    <div class="category-list-item" data-cat="${cat.id}">
      <span class="cat-list-name">${cat.name}</span>
      <span class="cat-list-count">${count ? count + " منتج" : "قريبًا"}</span>
      <svg class="cat-list-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </div>`;
  }).join("") + `</div>`;

  /* تعديل (جديد حسب الطلب): تحت قائمة الأقسام، تُعرض كل المنتجات مع
     بعضها "مخربطة" (مُبعثرة عشوائيًا) دون أي تجميع أو ترتيب حسب القسم —
     فقط في الشاشة الرئيسية للمتجر (عندما لا يوجد قسم مُختار). */
  html += `<div class="all-products-heading"><h3>كل المنتجات</h3></div>`;
  html += `<div class="products-grid"></div>`;   // تُملأ على دفعات تحت

  productsGrid.innerHTML = html;

  productsGrid.querySelectorAll(".category-list-item").forEach(card => {
    card.addEventListener("click", () => {
      activeCategory = card.dataset.cat;
      activeSub = null; // "الكل" افتراضيًا داخل القسم
      renderShop();
      scrollToProducts();
    });
  });

  appendProductsChunked(productsGrid.querySelector(".products-grid"), shuffledProducts(), true);
}

/* تعديل (جديد): تُرجع نسخة "مخربطة" (مُبعثرة عشوائيًا بخوارزمية Fisher-Yates)
   من مصفوفة PRODUCTS بدل ترتيبها الأصلي (المُجمّع حسب القسم)، لتُعرض كل
   المنتجات مع بعضها بشكل عشوائي أسفل قائمة الأقسام في الشاشة الرئيسية. */
function shuffledProducts(){
  const arr = PRODUCTS.slice();
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ================================================================
   عرض: منتجات قسم واحد فقط + تبويب تصفية النوع (الفرع) على نفس الشاشة
   مثال: داخل "أكواب قهوة" تظهر أزرار "الكل / بغطاء / بدون غطاء / فقط غطاء"
   وتحتها شبكة المنتجات المصفّاة مباشرة، دون أي انتقال لشاشة أخرى.
   ================================================================ */
function renderCategoryProducts(cat){
  clearChunkSentinel();
  productsGrid.className = "";

  const catProducts = PRODUCTS.filter(p => p.category === cat.id);
  const hasSubTabs = cat.subcategories && cat.subcategories.length > 1;

  let html = "";

  if (hasSubTabs){
    const tabs = [{ id: null, name: "الكل" }, ...cat.subcategories];
    html += `<div class="sub-filter-tabs">` + tabs.map(t => {
      const isActive = (activeSub === t.id) || (activeSub === null && t.id === null);
      return `<button type="button" class="sub-filter-tab${isActive ? " active" : ""}" data-sub="${t.id ?? ""}">${t.name}</button>`;
    }).join("") + `</div>`;
  }

  const items = activeSub
    ? catProducts.filter(p => p.sub === activeSub)
    : catProducts;

  html += `<div class="products-grid">`;
  if (!items.length) html += `<div class="no-results">لا توجد منتجات في هذا التصنيف بعد.</div>`;
  html += `</div>`;

  productsGrid.innerHTML = html;
  if (items.length) appendProductsChunked(productsGrid.querySelector(".products-grid"), items, false);

  // تبديل التبويب يُصفّي الشبكة فورًا على نفس الشاشة (بدون تغيير الصفحة)
  productsGrid.querySelectorAll(".sub-filter-tab").forEach(tabBtn => {
    tabBtn.addEventListener("click", () => {
      activeSub = tabBtn.dataset.sub || null;
      renderCategoryProducts(cat);
    });
  });
}

/* ================================================================
   تحميل المنتجات على دفعات (بدل ما تنرسم كل المنتجات مرة وحدة)
   - أول دفعة بتظهر فورًا، والباقي بينزل لما تقرّب من آخر الصفحة
     أو لما تضغط زر "عرض المزيد".
   - غيّروا الرقم تحت لتغيير حجم الدفعة.
   ================================================================ */
const PRODUCTS_PER_BATCH = 12;
let chunkObserver = null;
let chunkSentinel = null;

function clearChunkSentinel(){
  if (chunkObserver){ chunkObserver.disconnect(); chunkObserver = null; }
  if (chunkSentinel){ chunkSentinel.remove(); chunkSentinel = null; }
}

function appendProductsChunked(gridEl, items, showCategoryTag){
  clearChunkSentinel();
  if (!gridEl) return;
  let shown = 0;

  function loadNext(){
    const slice = items.slice(shown, shown + PRODUCTS_PER_BATCH);
    if (!slice.length) return;
    shown += slice.length;
    const tmp = document.createElement("div");
    tmp.innerHTML = slice.map(p => productCardHTML(p, showCategoryTag)).join("");
    bindProductCardEvents(tmp);          // نربط الأحداث على الكروت الجديدة فقط
    while (tmp.firstChild) gridEl.appendChild(tmp.firstChild);
    if (shown >= items.length) clearChunkSentinel();
  }

  loadNext();                            // الدفعة الأولى فورًا
  if (shown >= items.length) return;

  chunkSentinel = document.createElement("button");
  chunkSentinel.type = "button";
  chunkSentinel.className = "load-more-btn";
  chunkSentinel.textContent = "عرض المزيد";
  chunkSentinel.addEventListener("click", loadNext);
  gridEl.insertAdjacentElement("afterend", chunkSentinel);

  if ("IntersectionObserver" in window){
    chunkObserver = new IntersectionObserver(entries => {
      if (!entries.some(e => e.isIntersecting)) return;
      loadNext();
      // لو الزر لسا ظاهر بعد الدفعة (شاشة كبيرة) نعيد المراقبة لتنزل دفعة ثانية
      if (chunkObserver && chunkSentinel){
        chunkObserver.unobserve(chunkSentinel);
        chunkObserver.observe(chunkSentinel);
      }
    }, { rootMargin: "400px 0px" });
    chunkObserver.observe(chunkSentinel);
  }
}

/* ================================================================
   عرض: بطاقة "كرت" منتج واحد — دالة مشتركة تُستخدم في كل مكان
   (منتجات القسم، ونتائج البحث) حتى لا يتكرر نفس الكود مرتين.
   ================================================================ */
function productCardHTML(p, showCategoryTag){
  // تعديل (جديد): أضفنا data-id="${p.id}" على الكرت نفسه (وليس فقط على
  // زر "إضافة") حتى نستطيع لاحقًا معرفة أي منتج تم الضغط عليه لفتح النافذة.
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        <img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async">
      </div>
      <div class="product-body">
        <span class="product-category-tag">${showCategoryTag ? categoryName(p.category) + " · " + subName(p.category, p.sub) : subName(p.category, p.sub)}</span>
        <h3>${p.name}</h3>
        <div class="product-footer">
          <span class="price">$${p.price.toFixed(2)}</span>
          <button class="add-cart-btn" data-id="${p.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
            إضافة
          </button>
        </div>
      </div>
    </div>`;
}

/* تعديل (جديد): تربط أزرار "إضافة" وفتح نافذة التفاصيل داخل أي حاوية
   تحتوي بطاقات منتجات — تُستدعى بعد إدراج أي HTML جديد فيها. */
function bindProductCardEvents(container){
  /* زر "إضافة" السريع في الكرت يضيف المنتج مباشرة بالخيار الافتراضي
     "بدون غطاء" دون فتح النافذة المنبثقة. نستخدم event.stopPropagation()
     لمنع هذا الضغط من "الصعود" إلى الكرت نفسه وفتح النافذة بنفس اللحظة. */
  container.querySelectorAll(".add-cart-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      // تعديل: تضيف الآن أول خيار من كل مجموعة (variantGroups) مُعرّف لهذا
      // المنتج تحديدًا (أو أول variant بالنظام القديم)، بدل الافتراض دائمًا
      // أن كل منتج عنده خيار اسمه "no-lid".
      const product = PRODUCTS.find(p => p.id === btn.dataset.id);
      addToCart(btn.dataset.id, product ? getDefaultVariantId(product) : "no-lid");
    });
  });

  /* الضغط في أي مكان على الكرت (الصورة أو بقية الكرت) — باستثناء زر
     "إضافة" الذي أوقف صعود الحدث أعلاه — يفتح نافذة تفاصيل المنتج. */
  container.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => openProductModal(card.dataset.id));
  });
}

/* ================================================================
   عرض: قائمة المنتجات المسطّحة (تُستخدم فقط لعرض نتائج البحث)
   ================================================================ */
function renderProductList(items, showCategoryTag){
  productsGrid.className = "products-grid";

  if (items.length === 0){
    productsGrid.innerHTML = `<div class="no-results">لم يتم العثور على منتجات. جرّب بحثًا أو قسمًا مختلفًا.</div>`;
    return;
  }

  productsGrid.innerHTML = "";
  appendProductsChunked(productsGrid, items, showCategoryTag);
}

/* ================================================================
   منطق سلة الطلبات
   ================================================================ */
/* تعديل (جديد): أصبحت الدالة تقبل معامل ثانٍ "lid" (خيار الغطاء)،
   افتراضيًا "no-lid" حتى لا نكسر أي استدعاء قديم لها في الملف.
   البحث عن سطر موجود يتم الآن بحسب (نفس المنتج + نفس خيار الغطاء)
   عبر findCartLine() — أي أن إضافة نفس المنتج مرة "بدون غطاء" ومرة
   "مع غطاء" ينتج عنها سطران منفصلان في السلة، كلٌّ بسعره الخاص. */
/* تعديل (جديد): أصبحت الدالة تقبل معامل ثالث "qty" (الكمية) بالإضافة
   لمعامل "lid"، افتراضيًا 1 حتى لا نكسر أي استدعاء قديم لها في الملف
   (مثل زر "إضافة" السريع في كرت المنتج الذي ما زال يضيف قطعة واحدة). */
function addToCart(productId, lid = "no-lid", qty = 1){
  const safeQty = Number.isFinite(qty) && qty >= 1 ? Math.floor(qty) : 1;
  const existing = findCartLine(productId, lid);
  if (existing){
    existing.qty += safeQty;
  } else {
    cart.push({ id: productId, qty: safeQty, lid });
  }
  showToast("تمت الإضافة إلى السلة");
  renderCart();
}

/* تعديل: أصبحت تحذف سطرًا محددًا بالاعتماد على (المنتج + خيار الغطاء)
   معًا وليس على معرّف المنتج وحده، حتى لا تُحذف سلة "بغطاء" عن طريق
   الخطأ عند إزالة نفس المنتج "بدون غطاء" (أو العكس). */
function removeFromCart(productId, lid){
  cart = cart.filter(item => !(item.id === productId && item.lid === lid));
  renderCart();
}

function changeQty(productId, lid, delta){
  const item = findCartLine(productId, lid);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0){
    removeFromCart(productId, lid);
  } else {
    renderCart();
  }
}

/* تعديل (جديد): تسمح بتحديد الكمية يدويًا (كتابة رقم مباشرة في الحقل)
   بدل الاكتفاء بزري +/- فقط. أي رقم أقل من 1 أو غير صالح يُثبَّت على 1. */
function setQty(productId, lid, qty){
  const item = findCartLine(productId, lid);
  if (!item) return;
  const safeQty = Number.isFinite(qty) && qty >= 1 ? Math.floor(qty) : 1;
  item.qty = safeQty;
  renderCart();
}

function clearCart(){
  cart = [];
  // تعديل (جديد): إفراغ السلة يلغي أيضًا أي كود حسم مُطبَّق ويمسح الحقل/الرسالة
  appliedCoupon = null;
  if (couponInputEl) couponInputEl.value = "";
  if (couponMsgEl){ couponMsgEl.textContent = ""; couponMsgEl.className = "cart-coupon-msg"; }
  renderCart();
}

// المجموع الفرعي (بدون أي حسم): لكل سطر (سعر الخيار المختار × الكمية)
function getCartSubtotal(){
  return cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return sum;
    return sum + getLineUnitPrice(product, item.lid) * item.qty;
  }, 0);
}

/* ================================================================
   تعديل (جديد): أكواد الحسم (Coupons)
   ================================================================
   عدّل/أضف/احذف أكواد هنا بحرية — كل كود مفتاحه اسمه (بأحرف كبيرة،
   لأن التحقق يجري بتحويل ما يكتبه العميل تلقائيًا لأحرف كبيرة)، وله:

     type   → "percent" خصم بنسبة مئوية من إجمالي السلة، أو
              "fixed"   خصم مبلغ ثابت بالدولار.
     value  → قيمة الحسم (مثال: 10 مع percent = خصم 10%، أو 5 مع fixed = خصم $5).
     expiry → (اختياري) تاريخ انتهاء الصلاحية بصيغة "YYYY-MM-DD".
              احذف هذا الحقل كليًا إذا أردت الكود صالحًا بدون تاريخ انتهاء.

   أي كود غير موجود بالمصفوفة تظهر عنه رسالة "كود الحسم غير صحيح"،
   وأي كود تجاوز تاريخ expiry الخاص به تظهر عنه رسالة "كود الحسم
   منتهي الصلاحية" — كلاهما تلقائي عبر applyCoupon() بالأسفل.
   ================================================================ */
const COUPONS = {
  "BOSHE10": {
    "type": "percent",
    "value": 10
  },
  "SAVE5": {
    "type": "fixed",
    "value": 5
  },
  "OLD20": {
    "type": "percent",
    "value": 20,
    "expiry": "2025-01-01"
  }
};

let appliedCoupon = null; // { code, type, value } الكود المُطبَّق حاليًا، أو null إن لم يوجد

function isCouponExpired(coupon){
  if (!coupon.expiry) return false;
  // نعتبر الكود صالحًا حتى نهاية يوم تاريخ الانتهاء نفسه
  const expiryTime = new Date(coupon.expiry + "T23:59:59").getTime();
  return Date.now() > expiryTime;
}

// قيمة الحسم بالدولار عن الكود المُطبَّق حاليًا (0 إن لم يوجد كود مطبَّق)
function getDiscountAmount(){
  if (!appliedCoupon) return 0;
  const subtotal = getCartSubtotal();
  const raw = appliedCoupon.type === "percent"
    ? subtotal * (appliedCoupon.value / 100)
    : appliedCoupon.value;
  // الحسم لا يتجاوز أبدًا قيمة السلة نفسها (لا يصير الإجمالي رقمًا سالبًا)
  return Math.min(raw, subtotal);
}

// السعر الإجمالي النهائي بعد خصم قيمة الحسم (إن وُجد) من المجموع الفرعي
function getCartTotal(){
  return Math.max(getCartSubtotal() - getDiscountAmount(), 0);
}

function getCartCount(){
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

/* ================================================================
   عرض: سلة الطلبات الجانبية
   ================================================================ */
function renderCart(){
  saveCart();
  cartCountEl.textContent = getCartCount();

  if (cart.length === 0){
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
        <p>سلتك فارغة.</p>
      </div>`;
  } else {
    cartItemsEl.innerHTML = cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return "";
      // سعر القطعة الفعلي لهذا السطر (حسب الخيار/الزر المختار)
      const unitPrice = getLineUnitPrice(product, item.lid);
      const lidLabel = getVariantLabel(product, item.lid);
      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
          <div class="cart-item-info">
            <h4>${product.name}</h4>
            <!-- تعديل: أضفنا وسم الخيار المختار بجانب السعر ليعرف المستخدم أي نسخة أضافها -->
            <div class="unit-price">$${unitPrice.toFixed(2)} للقطعة · ${lidLabel}</div>
            <!-- data-id و data-lid معًا يحددان السطر بدقة عند الضغط على أزرار الكمية/الحذف -->
            <div class="qty-controls">
              <button class="qty-btn" data-action="dec" data-id="${item.id}" data-lid="${item.lid}">−</button>
              <!-- تعديل (جديد): الكمية أصبحت حقل رقم قابل للتعديل اليدوي (كتابة مباشرة)
                   بالإضافة لزري +/- كما كانت سابقًا (كانت span غير قابلة للتعديل). -->
              <input type="number" class="qty-value qty-input" min="1" inputmode="numeric"
                     value="${item.qty}" data-id="${item.id}" data-lid="${item.lid}">
              <button class="qty-btn" data-action="inc" data-id="${item.id}" data-lid="${item.lid}">+</button>
              <span class="item-total">$${(unitPrice * item.qty).toFixed(2)}</span>
              <button class="remove-item" data-action="remove" data-id="${item.id}" data-lid="${item.lid}">إزالة</button>
            </div>
          </div>
        </div>`;
    }).join("");
  }

  // تعديل (جديد): عرض المجموع الفرعي، وسطر الحسم إن كان هناك كود مُطبَّق وفعّال
  if (cart.length === 0){
    cartSummaryRowsEl.innerHTML = "";
  } else {
    const subtotal = getCartSubtotal();
    const discount = getDiscountAmount();
    let rowsHTML = `<div class="cart-summary-row"><span>المجموع الفرعي</span><span>$${subtotal.toFixed(2)}</span></div>`;
    if (appliedCoupon && discount > 0){
      rowsHTML += `<div class="cart-summary-row discount-row"><span>الحسم (${appliedCoupon.code})</span><span>-$${discount.toFixed(2)}</span></div>`;
    }
    cartSummaryRowsEl.innerHTML = rowsHTML;
  }

  cartTotalEl.textContent = "$" + getCartTotal().toFixed(2);

  // Bind quantity/remove buttons
  // تعديل: أصبحنا نقرأ data-lid أيضًا ونمرره للدوال حتى تعمل على السطر الصحيح
  cartItemsEl.querySelectorAll("[data-action]").forEach(btn => {
    const id = btn.dataset.id;
    const lid = btn.dataset.lid;
    const action = btn.dataset.action;
    btn.addEventListener("click", () => {
      if (action === "inc") changeQty(id, lid, 1);
      if (action === "dec") changeQty(id, lid, -1);
      if (action === "remove") removeFromCart(id, lid);
    });
  });

  // تعديل (جديد): ربط حقل الكمية القابل للتعديل يدويًا — يُطبَّق عند
  // الخروج من الحقل أو الضغط على Enter (change) بعد كتابة رقم جديد.
  cartItemsEl.querySelectorAll(".qty-input").forEach(input => {
    input.addEventListener("change", () => {
      setQty(input.dataset.id, input.dataset.lid, parseInt(input.value, 10));
    });
  });
}

/* ================================================================
   فتح/إغلاق سلة الطلبات
   ================================================================ */
function openCart(){
  cartDrawer.classList.add("show");
  overlay.classList.add("show");
}
function closeCartDrawer(){
  cartDrawer.classList.remove("show");
  overlay.classList.remove("show");
}

document.getElementById("cartToggleBtn").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCartDrawer);
overlay.addEventListener("click", () => {
  closeCartDrawer();
  closeCheckout();
});
document.getElementById("clearCartBtn").addEventListener("click", clearCart);

/* ================================================================
   تعديل (جديد): تطبيق كود الحسم
   ================================================================ */
function applyCoupon(){
  const code = couponInputEl.value.trim().toUpperCase();

  if (!code){
    appliedCoupon = null;
    couponMsgEl.textContent = "";
    couponMsgEl.className = "cart-coupon-msg";
    renderCart();
    return;
  }

  const coupon = COUPONS[code];

  if (!coupon){
    appliedCoupon = null;
    couponMsgEl.textContent = "كود الحسم غير صحيح.";
    couponMsgEl.className = "cart-coupon-msg error";
    renderCart();
    return;
  }

  if (isCouponExpired(coupon)){
    appliedCoupon = null;
    couponMsgEl.textContent = "كود الحسم منتهي الصلاحية.";
    couponMsgEl.className = "cart-coupon-msg error";
    renderCart();
    return;
  }

  appliedCoupon = { code, type: coupon.type, value: coupon.value };
  const valueLabel = coupon.type === "percent" ? `${coupon.value}%` : `$${coupon.value.toFixed(2)}`;
  couponMsgEl.textContent = `تم تطبيق كود الحسم بنجاح — خصم ${valueLabel}.`;
  couponMsgEl.className = "cart-coupon-msg success";
  renderCart();
}

applyCouponBtnEl.addEventListener("click", applyCoupon);
// الضغط على Enter داخل حقل الكود يطبّقه مباشرة دون الحاجة للضغط على الزر
couponInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    e.preventDefault();
    applyCoupon();
  }
});

/* ================================================================
   نافذة تفاصيل المنتج (Product Modal)
   ================================================================
   الفكرة العامة للربط (بعد تعديل "المجموعات القابلة للدمج"):
   1) openProductModal(productId) تُستدعى عند الضغط على أي كرت منتج.
      تبحث عن المنتج داخل PRODUCTS، تجلب "مجموعات" أزراره عبر
      getVariantGroups() (مجموعة واحدة للمنتجات القديمة، أو أكثر
      للمنتجات التي تستخدم variantGroups)، تبني الأزرار ديناميكيًا لكل
      مجموعة على حدة (renderModalVariantOptions)، تختار أول زر بكل
      مجموعة كخيار افتراضي، وتملأ الصورة/العنوان/الوصف/السعر بناءً عليه.
   2) الاختيار الحالي لكل مجموعات المنتج مخزّن بمتغيّر واحد اسمه
      currentSelection على شكل {groupId: optionId, ...} — كل مجموعة
      تحتفظ باختيارها الخاص بشكل مستقل عن باقي المجموعات، وبالتالي
      يقدر العميل يجمع زرًا من كل مجموعة بنفس الوقت (بدون غطاء + مقاس
      4 + قطعة مفردة مثلًا). عند الضغط على أي زر (عبر تفويض الحدث
      delegation على lidOptionCards) يتم استدعاء
      selectModalVariant(groupId, optionId) التي تحدّث اختيار تلك
      المجموعة فقط (بقية المجموعات تبقى كما هي)، ثم تُبدّل صورة المنتج
      المكبّرة لصورة هذا الزر تحديدًا (إن حُدّدت له صورة)، وتحدّث السعر
      المعروض أعلى النافذة حسب مجموع كل الاختيارات الحالية (أو حسب
      أزرار override إن وُجدت — راجع الشرح فوق getVariantGroups()).
   3) زر "إضافة إلى السلة" داخل النافذة يقرأ المنتج الحالي
      (currentModalProductId) ويبني معرّفًا مركّبًا واحدًا من كل
      اختيارات currentSelection عبر buildVariantId()، يطبعه بالكونسول،
      ثم يضيفه فعليًا للسلة عبر addToCart(id, lid) بحيث يظهر السطر
      لاحقًا في السلة الجانبية وملخص الطلب ورسالة واتساب بنفس السعر
      والاسم المحسوبين لهذا المزيج بالذات (راجع getLineUnitPrice()
      وgetVariantLabel() بالأعلى).
   ================================================================ */

// {groupId: optionId} — الاختيار الحالي بكل مجموعة داخل النافذة المفتوحة.
// حلّت محل المتغيّر القديم currentLidSelection (كان نصًا واحدًا بس).
let currentSelection = {};

// يبني أزرار الخيارات لكل "مجموعات" منتج معيّن داخل حاوية lidOptionCards.
// كل مجموعة تُعرض كـ"بلوك" مستقل بعنوانها الخاص (إن كان هناك أكثر من
// مجموعة واحدة فقط)، وصف أزرار بداخله بنفس شكل الأزرار القديم تمامًا.
function renderModalVariantOptions(product, groups, selection){
  const multiGroup = groups.length > 1;

  lidOptionCards.innerHTML = groups.map(g => `
    <div class="variant-group-block" data-group="${g.id}">
      ${multiGroup ? `<div class="variant-group-title">${g.name}</div>` : ""}
      <div class="lid-option-cards">
        ${g.options.map(o => `
          <button type="button" class="lid-option-card" data-group="${g.id}" data-option="${o.id}">
            <span class="lid-card-check">✓</span>
            <span class="lid-card-name">${o.name}</span>
            <span class="lid-card-price">$${o.price.toFixed(2)}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");

  // تحديد الزر المختار حاليًا (بصريًا) بكل مجموعة حسب selection المُمرَّرة
  groups.forEach(g => {
    const card = lidOptionCards.querySelector(`.lid-option-card[data-group="${g.id}"][data-option="${selection[g.id]}"]`);
    if (card) card.classList.add("selected");
  });
}

function openProductModal(productId){
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentModalProductId = productId;

  const groups = getVariantGroups(product);
  // الاختيار الافتراضي: أول زر بكل مجموعة (بنفس منطق getDefaultVariantId)
  currentSelection = {};
  groups.forEach(g => { currentSelection[g.id] = g.options[0].id; });
  const defaultOption = groups[0].options[0];

  // تعبئة الصورة المكبّرة، العنوان، والوصف التفصيلي حسب الخيار الافتراضي (أول زر بأول مجموعة)
  productModalImg.src = defaultOption.image;
  productModalImg.alt = product.name;
  productModalTitle.textContent = product.name;
  // بعض المنتجات وصفها فارغ في مصفوفة PRODUCTS؛ نعرض نصًا بديلًا عندها
  productModalDesc.textContent = product.desc && product.desc.trim() !== ""
    ? product.desc
    : "لا يوجد وصف تفصيلي لهذا المنتج حاليًا.";

  // تعديل (جديد): إعادة ضبط الكمية على 1 في كل مرة تُفتح فيها النافذة
  currentModalQty = 1;
  modalQtyInput.value = 1;

  // ← إخفاء/إظهار حاوية الأزرار بالكامل: تظهر فقط إذا كان للمنتج أكثر
  // من خيار واحد بمجموعة واحدة (منتج بخيار واحد بس لا داعي لعرض أي
  // أزرار اختيار له). منتج بأكثر من مجموعة تظهر أزراره دائمًا حتى لو
  // كانت كل مجموعة بها خيار واحد فقط (نادر، لكن أوضح للعميل).
  const showLidOption = groups.length > 1 || groups[0].options.length > 1;
  lidOptionGroup.style.display = showLidOption ? "" : "none";
  // كلاس "multi-group" يُخفي عنوان "اختر النوع" العام (نعتمد بدلًا منه
  // على عنوان كل مجموعة على حدة — راجع CSS الخاص بـ .variant-group-title)
  lidOptionGroup.classList.toggle("multi-group", groups.length > 1);

  // بناء الأزرار ديناميكيًا (بلوك لكل مجموعة، وزر لكل خيار بداخلها)
  renderModalVariantOptions(product, groups, currentSelection);

  // تحديث السعر المعروض أعلى النافذة بناءً على الاختيار الافتراضي
  updateModalPrice();

  // ← التحكم بالخلفية الغامقة (Overlay) لهذا المنتج تحديدًا.
  // إذا كان product.overlay === false نخفي الخلفية الغامقة لهذا المنتج فقط
  // (عبر كلاس "no-overlay")، وإلا (true أو الحقل غير موجود) تبقى ظاهرة كالمعتاد.
  productModal.classList.toggle("no-overlay", product.overlay === false);

  productModal.classList.add("show");
}

function closeProductModal(){
  productModal.classList.remove("show");
  currentModalProductId = null;
}

// تُعاد حسابها كل مرة يتغيّر فيها أي اختيار داخل أي مجموعة بالنافذة.
// تحسب السعر عبر buildVariantId() + getLineUnitPrice() (تجمع كل
// المجموعات، أو تعتمد على أزرار override فقط إن وُجدت — راجع الشرح
// الكامل فوق تعريف getVariantGroups() بالأعلى)، وتُظهر/تُخفي الرسالة
// التوضيحية الصغيرة عند اختيار زر "سعر ثابت" (override).
function updateModalPrice(){
  const product = PRODUCTS.find(p => p.id === currentModalProductId);
  if (!product) return;

  const groups = getVariantGroups(product);
  const variantId = buildVariantId(groups, currentSelection);
  const price = getLineUnitPrice(product, variantId);
  productModalPrice.textContent = `$${price.toFixed(2)}`;

  // رسالة "هذا السعر ثابت..." تظهر فقط لو المنتج فيه أكثر من مجموعة
  // وكان أحد الأزرار المختارة حاليًا من نوع override:true
  if (groups.length > 1 && hasOverrideSelected(product, variantId)){
    variantOverrideNote.textContent = "هذا السعر ثابت لهذا الخيار، بغض النظر عن بقية الأزرار المختارة أعلاه.";
    variantOverrideNote.classList.add("show");
  } else {
    variantOverrideNote.classList.remove("show");
  }
}

// عند الضغط على أي زر: يحدّث اختيار مجموعته فقط (بقية المجموعات تبقى
// كما هي)، يُبدّل صورة المنتج المكبّرة لصورة هذا الزر تحديدًا (إن وُجدت)،
// ويعيد حساب السعر النهائي حسب كل الاختيارات الحالية مجتمعة.
function selectModalVariant(groupId, optionId){
  currentSelection[groupId] = optionId;

  // تحديث تمييز الزر المختار بصريًا — داخل نفس المجموعة (data-group) فقط،
  // حتى لا يتأثر اختيار بقية المجموعات الظاهرة بنفس النافذة.
  lidOptionCards.querySelectorAll(`.lid-option-card[data-group="${groupId}"]`).forEach(card => {
    card.classList.toggle("selected", card.dataset.option === optionId);
  });

  const product = PRODUCTS.find(p => p.id === currentModalProductId);
  if (product){
    const groups = getVariantGroups(product);
    const clickedGroup = groups.find(g => g.id === groupId);
    const clickedOption = clickedGroup && clickedGroup.options.find(o => o.id === optionId);
    if (clickedOption && clickedOption.image){
      productModalImg.src = clickedOption.image;
      productModalImg.alt = product.name;
    }
  }

  updateModalPrice();
}

// تعديل (جديد): تفويض حدث واحد (Event Delegation) على حاوية الأزرار بدل
// ربط حدث بكل زر على حدة — ضروري لأن الأزرار نفسها تُعاد بناؤها في كل
// مرة يُفتح فيها منتج مختلف (renderModalVariantOptions).
lidOptionCards.addEventListener("click", (e) => {
  const card = e.target.closest(".lid-option-card");
  if (!card) return;
  selectModalVariant(card.dataset.group, card.dataset.option);
});

// تعديل (جديد): تحديد الكمية داخل نافذة المنتج — زر "+"/"−" يزيد/ينقص
// واحدة واحدة، وحقل الرقم يقبل كتابة أي رقم مباشرة (كلاهما يُحدّثان نفس المتغيّر).
function setModalQty(qty){
  const safeQty = Number.isFinite(qty) && qty >= 1 ? Math.floor(qty) : 1;
  currentModalQty = safeQty;
  modalQtyInput.value = safeQty;
}
modalQtyInc.addEventListener("click", () => setModalQty(currentModalQty + 1));
modalQtyDec.addEventListener("click", () => setModalQty(currentModalQty - 1));
modalQtyInput.addEventListener("change", () => setModalQty(parseInt(modalQtyInput.value, 10)));

// زر إغلاق (X)
document.getElementById("productModalClose").addEventListener("click", closeProductModal);
// الضغط خارج الصندوق (على الخلفية المعتمة الخاصة بهذه النافذة) يغلقها أيضًا
document.getElementById("productModalBackdrop").addEventListener("click", closeProductModal);

// زر "إضافة إلى السلة" داخل النافذة
productModalAddBtn.addEventListener("click", () => {
  if (!currentModalProductId) return;
  const product = PRODUCTS.find(p => p.id === currentModalProductId);
  // تعديل: يبني معرّفًا مركّبًا واحدًا يجمع اختيار كل المجموعات الحالية
  // (currentSelection) بدل الاعتماد على متغيّر نصي واحد كالسابق.
  const groups = getVariantGroups(product);
  const selectedLid = buildVariantId(groups, currentSelection);
  const finalPrice = getLineUnitPrice(product, selectedLid);

  // طباعة البيانات المجمّعة في الكونسول كما هو مطلوب
  console.log("إضافة إلى السلة:", {
    id: product.id,
    name: product.name,
    lid: selectedLid,
    qty: currentModalQty,
    unitPrice: finalPrice
  });

  // الإضافة الفعلية لسلة الطلبات (تظهر في السلة الجانبية وباقي مراحل الطلب)
  // تعديل (جديد): تُضاف الآن بالكمية المحددة داخل النافذة (currentModalQty) بدل 1 دائمًا
  addToCart(product.id, selectedLid, currentModalQty);

  closeProductModal();
});

/* ================================================================
   TOAST
   ================================================================ */
let toastTimer;
function showToast(msg){
  toastMsg.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ================================================================
   البحث
   ================================================================ */
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderShop();
});

/* ================================================================
   قائمة الجوال (تعديل: أُعيدت كتابة هذا الجزء بالكامل)
   — الكود القديم كان فقط يبدّل كلاس "mobile-show" على mainNav وهذا
   الكلاس لم يكن له أي تأثير CSS أصلًا، فلم تكن القائمة تعمل.
   الآن الزر يفتح/يغلق اللوحة الجانبية mobileMenuDrawer + الخلفية المعتمة.
   ================================================================ */
const mobileMenuDrawer   = document.getElementById("mobileMenuDrawer");
const mobileMenuOverlay  = document.getElementById("mobileMenuOverlay");
const mobileMenuToggle   = document.getElementById("menuToggle");
const mobileMenuClose    = document.getElementById("mobileMenuClose");
const mobileMenuCatsBox  = document.getElementById("mobileMenuCategories");

function openMobileMenu(){
  mobileMenuDrawer.classList.add("open");
  mobileMenuOverlay.classList.add("open");
  document.body.style.overflow = "hidden"; // يمنع التمرير خلف القائمة أثناء فتحها
}
function closeMobileMenu(){
  mobileMenuDrawer.classList.remove("open");
  mobileMenuOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

mobileMenuToggle.addEventListener("click", openMobileMenu);
mobileMenuClose.addEventListener("click", closeMobileMenu);
mobileMenuOverlay.addEventListener("click", closeMobileMenu);

// أي رابط ثابت داخل القائمة (الرئيسية/المتجر/تواصل معنا) يغلق القائمة بعد الضغط عليه
document.querySelectorAll(".mobile-menu-link[data-close-menu]").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

/* تعديل: بناء قائمة الأقسام الرئيسية داخل القائمة الجانبية تلقائيًا من
   نفس مصفوفة CATEGORIES. الضغط على قسم يفتح المتجر على منتجات هذا
   القسم مباشرة (مثل الضغط على القسم من الشاشة الرئيسية للمتجر). */
function buildMobileMenuCategories(){
  mobileMenuCatsBox.innerHTML = CATEGORIES.map(cat =>
    `<button type="button" class="mobile-menu-cat-btn" data-cat="${cat.id}">${cat.name}</button>`
  ).join("");

  mobileMenuCatsBox.querySelectorAll(".mobile-menu-cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      activeSub = null;
      searchQuery = "";
      document.getElementById("searchInput").value = "";
      renderShop();
      closeMobileMenu();
      /* تعديل (إصلاح "لا يتحرك الموقع" + إصلاح القفز للفوتر):
         سابقًا كنا نستدعي scrollIntoView مباشرة بعد closeMobileMenu() في نفس
         اللحظة، فيتصادم ذلك مع إزالة overflow:hidden عن body وتحريك القائمة
         بالانتقال (transition) نفس اللحظة — فيتجاهل المتصفح حركة التمرير.
         الحل: ننتظر حتى تنتهي حركة إغلاق القائمة (320ms) ثم نستخدم دالة
         scrollToProducts() الموحّدة (نفس الدالة المستخدمة بكل أزرار الأقسام). */
      setTimeout(scrollToProducts, 320);
    });
  });
}
buildMobileMenuCategories();

/* ================================================================
   نافذة إتمام الطلب
   ================================================================ */
function openCheckout(){
  if (cart.length === 0){
    showToast("سلتك فارغة");
    return;
  }
  renderCheckoutSummary();
  checkoutModal.classList.add("show");
  overlay.classList.add("show");
}
function closeCheckout(){
  checkoutModal.classList.remove("show");
  overlay.classList.remove("show");
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  closeCartDrawer();
  openCheckout();
});
document.getElementById("cancelCheckout").addEventListener("click", closeCheckout);
document.getElementById("checkoutBackdrop").addEventListener("click", closeCheckout);

function renderCheckoutSummary(){
  // تعديل: يعرض الآن اسم الخيار/الزر المختار لكل سطر ويحسب السعر عبر getLineUnitPrice()
  const lines = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    const unitPrice = getLineUnitPrice(product, item.lid);
    const lidLabel = getVariantLabel(product, item.lid);
    return `${product.name} (${lidLabel}) × ${item.qty} — $${(unitPrice * item.qty).toFixed(2)}`;
  });

  // تعديل (جديد): إظهار سطر المجموع الفرعي وسطر الحسم (إن وُجد كود مُطبَّق وفعّال) قبل الإجمالي النهائي
  const subtotal = getCartSubtotal();
  const discount = getDiscountAmount();
  let totalsHTML = "";
  if (appliedCoupon && discount > 0){
    totalsHTML += `المجموع الفرعي: $${subtotal.toFixed(2)}<br>`;
    totalsHTML += `الحسم (${appliedCoupon.code}): -$${discount.toFixed(2)}<br>`;
  }
  totalsHTML += `<strong>الإجمالي: $${getCartTotal().toFixed(2)}</strong>`;

  checkoutSummary.innerHTML = `
    <strong>ملخص الطلب</strong><br>
    ${lines.join("<br>")}<br><br>
    ${totalsHTML}
  `;
}

/* ================================================================
   إرسال نموذج إتمام الطلب ← فتح واتساب
   ================================================================ */
document.getElementById("checkoutForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const notes = document.getElementById("custNotes").value.trim();

  if (!name || !phone || !address){
    showToast("يرجى تعبئة جميع الحقول المطلوبة");
    return;
  }

  // Build the order lines
  // تعديل: تضمين اسم الخيار/الزر المختار واحتساب سعره الخاص عبر getLineUnitPrice()
  const orderLines = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    const unitPrice = getLineUnitPrice(product, item.lid);
    const lidLabel = getVariantLabel(product, item.lid);
    return `- ${product.name} (${lidLabel}) x${item.qty} = $${(unitPrice * item.qty).toFixed(2)}`;
  }).join("\n");

  // تعديل (جديد): إضافة سطري المجموع الفرعي والحسم لرسالة واتساب إن كان هناك كود مُطبَّق وفعّال
  const subtotal = getCartSubtotal();
  const discount = getDiscountAmount();
  const total = getCartTotal().toFixed(2);

  // Build the WhatsApp message
  let message = `*طلب جديد — بوشي*\n\n`;
  message += `*اسم العميل:* ${name}\n`;
  message += `*رقم الهاتف:* ${phone}\n`;
  message += `*عنوان التوصيل:* ${address}\n`;
  if (notes) message += `*ملاحظات:* ${notes}\n`;
  message += `\n*تفاصيل الطلب:*\n${orderLines}\n\n`;
  if (appliedCoupon && discount > 0){
    message += `*المجموع الفرعي:* $${subtotal.toFixed(2)}\n`;
    message += `*الحسم (${appliedCoupon.code}):* -$${discount.toFixed(1)}\n`;
  }
  message += `*الإجمالي: $${total}*`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, "_blank");

  // Reset everything after order is sent
  closeCheckout();
  clearCart();
  document.getElementById("checkoutForm").reset();
  showToast("تم إرسال الطلب عبر واتساب!");
});

/* ================================================================
   التهيئة الأولية
   ================================================================ */

renderShop();
renderCart();

/* ================================================================
   صفحة الترحيب المؤقتة (Splash Screen)
   ================================================================ */
// مدة ظهور صفحة الترحيب: 3000 = 3 ثوانٍ. غيّروا الرقم لتغيير المدة.
const SPLASH_DURATION = 2000;
// كان ينتظر حدث "load" يعني تحميل كل الصور — هلق يبدأ العدّ مباشرة بعد ما الصفحة تنرسم.
setTimeout(() => {
  const splash = document.getElementById("splashScreen");
  if (splash){
    splash.classList.add("splash-hide");
    document.body.classList.remove("splash-active");
    setTimeout(() => splash.remove(), 700);
  }
}, SPLASH_DURATION);

// ===== صورة شام كاش: غيّر المسار هون على كيفك =====
const SHAM_CASH_IMAGE = "2002.jpg";
(function(){
  const btn=document.getElementById("shamCashBtn"),
        modal=document.getElementById("shamModal"),
        img=document.getElementById("shamImg"),
        miss=document.getElementById("shamMissing");
  function open(){
    miss.style.display="none"; img.style.display="block";
    img.onerror=function(){ img.style.display="none"; miss.style.display="block"; };
    img.src=SHAM_CASH_IMAGE;
    modal.classList.add("open");
  }
  function close(){ modal.classList.remove("open"); }
  btn.addEventListener("click",open);
  document.getElementById("shamClose").addEventListener("click",close);
  modal.addEventListener("click",function(e){ if(e.target===modal) close(); });
  document.addEventListener("keydown",function(e){ if(e.key==="Escape") close(); });
})();
