<script>
    function validateform() {
        var name=dociment.myform.name.value;
        var password=document.myform.password.value;
        if(name==null || name==""){
            alert("Please fill the box")
        }else if(password.lenght<5){
            alert("Password must be 8 charactores")
        }
        
    }
</script>