//for
// for(let i=0;i<10;i++)
// {
//     let res=i+1;
//     console.log(res);
// }

// let arr=['Luffy','Zoro','Sanji']
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

//break and continue
// for(let i=1;i<=20;i++)
// {
    
//     if(i==5)
//     {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of index is ${i}`);
// }

for(let i=1;i<=20;i++)
{
    if(i==4)
    {
        console.log(`Skip the 4`);
        continue
    }
    console.log(`Value of index is ${i}`);
}