import { useEffect } from "react";
export default function Cssdisplay() {
    useEffect(() => {
        const allBox = document.querySelectorAll('img');
        console.log(allBox)
        const checkbox=()=>{
    
            allBox.forEach((box)=>{
                //條件一：頂部小於頁面高度
                const currentPosition = window.scrollY + window.innerHeight;
                const boxPosition = box.offsetTop;
                const boxAppear = currentPosition > boxPosition;
                //條件二：底部高於頁面高度
                const boxBottom = box.offsetTop + box.clientHeight;
                const boxOnWindow = window.scrollY < boxBottom;

                if(boxOnWindow && boxAppear) {
                //符合出現條件，加上active此class
                box.classList.add('active');
                } else {
                //不符合出現條件，移除active此class
               
                };
                })
        
        }
        checkbox();//手動調用 剛渲染完不會觸發
        window.addEventListener('scroll', checkbox, true);

        return () => {
        window.removeEventListener('scroll', checkbox, true);
        };
    }, );

    return null;
}