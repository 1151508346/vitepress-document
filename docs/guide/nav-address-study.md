## 老司机学习地址
> 记录老司机学习地址
- test地址: http://www.baidu.com




<script type="text/javascript">
    
    try {
        let password = window.prompt('请输入密码!')
        const app = document.querySelector('#app')
        app.style.opacity = 0;
        setTimeout(() => {
            const domId = document.querySelector('#老司机学习地址');
            const p = domId.parentElement;
            p.style.display='none';
            const PASS = '1qaz!QAZ';
            if(password === PASS){
                // 显示内容
                p.style.display='block';
            }else{
                // 隐藏内容
                p.style.display='none';
            }
            app.style.opacity = 1;

        }, 0);
    } catch (error) {
        console.log(error,'--------当前环境不支持--------')
    }
    
    
    


</script>




