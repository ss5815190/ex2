import { useEffect } from "react";
 const Cssdisplay=(tag)=> {
    useEffect(() => {
        const allBox = document.querySelectorAll(tag);
        console.log(allBox)
        const checkbox=()=>{
            
            allBox.forEach((box)=>{
                const boxRect = box.getBoundingClientRect();
                const boxTop = boxRect.top + window.pageYOffset;
                const boxBottom = boxRect.bottom + window.pageYOffset;
                const currentPosition = window.scrollY + window.innerHeight;
                //條件一：頂部小於頁面高度
                const boxAppear = currentPosition > boxTop;
                //條件二：底部高於頁面高度
                const boxOnWindow = window.scrollY < boxBottom;

                if(boxOnWindow && boxAppear) {
                //符合出現條件，加上active此class
                box.classList.add('active');
                } else {
                //不符合出現條件，移除active此class
                box.classList.remove('active');
                };
                })
        
        }
        checkbox();//手動調用 剛渲染完不會觸發
        window.addEventListener('scroll', checkbox, true);

        return () => {
        window.removeEventListener('scroll', checkbox, true);
        };
    },[]);

    
    return null;
}
export default Cssdisplay;