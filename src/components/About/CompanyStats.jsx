import "./CompanyStats.css";

function CompanyStats(){

const stats=[
["5M+","Happy Customers"],
["500+","Premium Products"],
["4.8★","Customers Rating"],
["25k+","Orders Delivered"],
["250+","Cities"]
];

return(

<section className="company-stats">

{stats.map((item,index)=>(
<div key={index}>

<h2>{item[0]}</h2>

<p>{item[1]}</p>

</div>
))}

</section>

);

}

export default CompanyStats;