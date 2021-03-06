## ნაწილი 1: username

გავაგრძელოთ ჩვენი აპლიკაციის წერა. ერთ-ერთი პირველი, რაც 'სოციალური' ნაწილისთვის აუცილებელია, არის მომხმარებლები. მოდი ამ ეტაპისთვის ზედმეტ დეტალებზე ფიქრით არ დავიტვირთოთ თავი და ყველაზე პრიმიტიული მიდგომით დავიწყოთ - უბრალოდ შევქმნათ ველი, სადაც ჩაიწერება სახლი და დაპოსტვის ღილაკზე დაჭერისას ამოვიღებთ სახელს (იმავენაირად, როგორც პოსტის ტექსტს). 

- შეგვიძლია addPost ფუნქციას გადავაწოდოთ ორი არგუმენტი (ტექსტი და იუზერი) მაგრამ დაფიქრდით, იქნებ მომავალში უფრო გაიზარდოს გადასაწოდებელი ინფორმაცია? ამ შემთხვევაში სჯობს, addPost-ს ერთი არგუმენტი ქონდეს - პოსტის ობიექტი. 


1. შევცვალოთ `createPost()` ფუნქციის არგუმენტი და დავარქვათ `post`. ფუნქციის ტანში ტექსტის ადგილას ჩავწეროთ `post.text`, ხოლო გამოძახებისას გადავაწოდოთ ობიექტი, რომლის `text` ატრიბუტი იქნება `getPostText()` ფუნქციის დაბრუნებული მნისვნელობა
2. დავამატოთ html კოდში `input` ელემენტი
3. შევქმნათ `getUser()`ფუნქცია, რომელიც იმუშავებს იგივენაირად, როგორც `getPostText()`
4. `newPost()`ფუნქციაში `createPost()`-სთვის გადაწოდებულ ობიექტს დავამატოთ `user` ატრიბუტი, რომლის მნიშვნელობას მივიღებთ წინა ნაბიჯში შექმნილი ფუნქციიდან.
5. შევცვალოთ `createPost()` ფუნქცია ისე, რომ გამოვიყენოთ `post.user` ატრიბუტი.

სულ ეს არის, მხოლოდ რამდენიმე ხაზი დაჭირდა. ასევე ამ დროს დავამატე container კლასი, რომ ყველა ცალკეული სექცია ერთმანეთისგან margin და padding-ით გამომეყო. მინიმალური ცვლილებებია საიტის სტილშიც.


[ამ ნაწილის შედეგი](./user) და [კოდი](https://github.com/iarigby/freeuni-digital-technologies/tree/master/seminars/social_media_app_part1_2/user)

## ნაწილი 2: like
ახლა გადავიდეთ ლაიქის იმპლემენტაციაზე. პოსტისგან საკმაოდ განსხვავებული ფუნქციაა - როდესაც პოსტს ვამატებთ, მხოლოდ ერთი ადგილიდან ვიღებთ ტექსტს და ერთ ფიდში ვამატებთ. ჩემი იდეაა ყველა პოსტს მივანიჭოთ უნიკალური `id` და ლაიქის დამატებისას ეს რიცხვი გადავაწოდოთ ფუნქციას. სხვა მიდგომებიც არსებობს, თუ ვინმე სხვა გზას მოიფიქრებს, გამოგვიგზავნეთ კოდი და პირველ გამოგზავნილებს ბონუს ქულას დავუწერთ.

ისევე, როგორც წინა ნაწილში, ზედმეტ დეტალებზე ფიქრს სჯობს ყველაზე პრიმიტიული მიდგომით დავიწყოთ, მაგრამ კოდი საკმარისად მოდულარული იყოს იმისთვის, რომ მოგვიანებით უკეთესი გზებით ჩავანაცვლოთ. თვითონ ფუნქციონალიც პრიმიტიული იყოს - უბრალოდ იმდენი ლაიქი ქონდეს, რამდენჯერაც ღილაკს დავაჭერთ

1. დავიწყოთ პოსტებისთვის id-ის მინიჭებით. ამ ეტაპზე უბრალოდ გლობალურ ცვლადს შექვმნი და ყოველ პოსტზე ერთით გავზრდი.
2. `createPost()`-ში ელემენტს დავამატოთ ღილაკი, რომელიც გამოიძახებს ლაიქის დამატების ფუნქციას ამ `id`-ით. ამ ფუნქციას შემდეგ დავწერთ. ასევე გავამზადოთ სივრცე, სადაც დაიწერება რამდენი ლაიქი აქვს პოსტს.
3. გადავიდეთ ლაიქის დამატების ფუნქციაზე. რადგან აქ პოსტის id გვაქვს, უბრალოდ ვიპოვოთ პოსტის ელემენტი და მას შიგნით უკვე id-ს გარეშე მოვძებნოთ სხვადასხვა სივრცეები. იმისთვის, რომ გავზარდოთ ლაიქების რაოდენობა, ჯერ უნდა გავიგოთ რამდენი აქვს - ამისთვის შევქმენი `span` ელემენტი, საიდანაც ამ რიცხვს როგორც წავიკითხავთ, ასევე ჩავწერთ (ერთით გაზრდილს).

`createPost()` ფუნქცია უკვე საკმაოდ იზრდება და დეკომპოზიციის საჭიროებას ვხედავ - აქ ხომ კიდევ სხვა ელემენტები უნდა დავამატო. ამიტომ ლაიქების ნაწილს ცალკე გავიტან, `createPostLikes()` ფუნქციად. ასევე, სტილის თეგიც სჯობს ცალკე stylesheet-ად გავიტანოთ.


[ამ ნაწილის შედეგი](./like) და [კოდი](https://github.com/iarigby/freeuni-digital-technologies/tree/master/seminars/social_media_app_part1_2/like)