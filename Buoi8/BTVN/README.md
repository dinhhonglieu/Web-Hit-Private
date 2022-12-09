Sự khác nhau giữa var, let và cons
1. Biến var
với từ khóa var chúng ta có thể khai báo đa dạng các kiểu biến như number, string, boolean, etc. Trừ trường hợp được khai báo bên trong 1 function (khi đó biến var sẽ có scope là function/locally scoped), biến var sẽ có scope là globally scoped. Đặc biệt, biến var còn có thêm tính chất hoisting: nghĩa là dù khai báo ở đâu thì biến đều sẽ được đem lên đầu scope trước khi code được thực hiện.
Điều này sẽ không có gây vấn đề gì nhưng nếu trong trường hợp code của chúng ta lên đến hàng trăm, hàng nghìn dòng code, hoặc chúng ta cũng không biết được giá trị của biến liệu có bị thay đổi ở đoạn code nào sẽ dẫn đến việc debug là vô cùng khó khăn
2.Biến let
Một trong những nguyên nhân khiến let có thể thay thế var để xử lý vấn đề nêu trên là vì biến let được khai báo sẽ có scope là block scoped chứ không phải globally hay locally scoped.
let cho phép chúng ta cập nhật giá trị của biến chứ không cho phép chúng ta tái khái báo lại biến đó.
Tuy nhiên, đối với các block khác nhau thì việc tái khai báo biến sẽ không sinh ra lỗi vì đối với từng scope, mỗi biến sẽ được xem xét là 1 biến riêng khác biệt.
Giống với var, let cũng có tính hoisting tuy nhiên lại khác nhau ở chỗ thay vì var được khởi tạo với giá trị là undefined thì let sẽ không có bất kỳ giá trị khởi tạo nào. Điều này dẫn đến việc nếu chúng ta sử dụng biến let trước khi khai báo thì sẽ gặp lỗi Reference Error.
3. Biến const
Tương tự với let cũng có scope là block scoped, và hoisting thì chúng ta có thêm 1 kiểu khai báo biến nữa là const. Trong biến const nếu trường hợp kiểu của biến là primitive (bao gồm string, number, boolean, null, và undefined) thì chúng ta sẽ không thể tái khai.
Đối với trường hợp kiểu biến là reference (bao gồm object, array, và function) thì tuy không thể tái khai báo hay cập nhật giá trị của biến nhưng chúng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó. báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến.
