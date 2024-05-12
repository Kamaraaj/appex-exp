sample1@test.com
password:sample
3
Branch code : sample

<nav>
    <ul class="pagination">
        <li class="page-item">
            <button class="page-link" OnClick="updateCurrentCount(isActive-1)">&laquo;</button>
        </li>
        {
           pages().map((item,index)=>(
             <li class="page-item" key={index}>
                <button class="page-link" OnClick="updateCurrentCount(item)">{item} </button>
            </li>
           )) 
        }
        <li class="page-item">
            <button class="page-link" @OnClick="updateCurrentCount(isActive+1)">&raquo;</button>  
        </li>
    </ul>
</nav>
