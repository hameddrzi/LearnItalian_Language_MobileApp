# TabBar Component

این کامپوننت TabBar برای نویگیشن بین صفحات مختلف اپلیکیشن Chatly ایجاد شده است.

## ویژگی‌ها

- 📱 طراحی ریسپانسیو و مدرن
- 🎨 استفاده از آیکون‌های کاستوم از پوشه assets
- 🌈 انیمیشن و افکت‌های زیبا برای تب فعال
- 🎯 نویگیشن ساده و روان
- 💫 بکگراند تصویری با قابلیت تنظیم

## نحوه استفاده

### 1. کامپوننت TabBar
```jsx
import TabBar from './src/screen/TabBar';

// در React Navigation
<Tab.Navigator
  tabBar={(props) => <TabBar {...props} />}
  screenOptions={{ headerShown: false }}
>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Course" component={CourseScreen} />
  // ...
</Tab.Navigator>
```

### 2. تنظیمات App.js
```jsx
// برای نمایش TabBar:
const [isLoggedIn, setIsLoggedIn] = useState(true);

// در return:
{isLoggedIn ? <MainNavigator /> : <IntroNavigator />}
```

## ساختار فایل‌ها

```
src/screen/
├── TabBar.js              # کامپوننت اصلی TabBar
├── MainNavigator.js       # نویگیتور اصلی با TabBar
└── TabBar/
    └── README.md         # این فایل
```

## آیکون‌ها

آیکون‌های مورد استفاده در پوشه `assets/pic/barFooter/`:
- Home.png
- Cours.png  
- Search.png
- Message.png
- Account.png
- Bar.png (بکگراند)

## کاستومایزیشن

### تغییر رنگ‌ها
```jsx
// در styles object:
activeTabIcon: {
  tintColor: '#4C6EF5', // رنگ آیکون فعال
},
tabIcon: {
  tintColor: '#8E8E8E', // رنگ آیکون غیرفعال
},
```

### اضافه کردن تب جدید
```jsx
// در آرایه tabs:
{
  name: 'NewTab',
  icon: require('../../assets/pic/barFooter/NewIcon.png'),
  label: 'New Tab',
  route: 'NewRoute'
}
```

## نکات مهم

1. **فونت‌ها**: اطمینان حاصل کنید فونت‌های Poppins در App.js لود شده‌اند
2. **آیکون‌ها**: آیکون‌ها باید در فرمت PNG و با رزولوشن مناسب باشند
3. **نویگیشن**: برای عملکرد صحیح، NavigationContainer در سطح بالا اپلیکیشن قرار دهید
4. **استایل**: TabBar در bottom صفحه قرار می‌گیرد و position absolute دارد

## مشکلات رایج

### آیکون‌ها نمایش داده نمی‌شوند
- مسیر فایل‌های آیکون را چک کنید
- اطمینان حاصل کنید فایل‌ها در پوشه assets موجود هستند

### نویگیشن کار نمی‌کند  
- NavigationContainer را در App.js اضافه کنید
- اطمینان حاصل کنید نام route‌ها در TabBar و Navigator یکسان هستند





