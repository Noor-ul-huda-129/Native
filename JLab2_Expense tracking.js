tracker=[{day:"Monday",expense:1000},
    {day:"Tuesday",expense:2000},
    {day:"Wednesday",expense:1500},
    {day:"Thursday",expense:2500},
    {day:"Friday",expense:900}
]
var limit=1500,i=0,count=0;
for(let a in tracker){
    console.log("$ {tracker[i].day } expense is {$ tracker[i].expense}")
    i++;
}
i=0;
for(let a in tracker){
    if (tracker[i].expense>limit)
        {
          count++;
          console.log("${ tracker[i].day }");
        }
}
console.log("$ count is {count}");
