<script>
const obj = {
  name: "test",
  a() {
    // 指向obj.a
    console.log(this.a);
    setTimeout(function () {
      // 指向window
      console.log(this.a);
    }, 1000);
  },
  b() {
    // 指向函数调用者obj
    console.log(this);
  },
};
obj.a();
obj.b();
</script>

