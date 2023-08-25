import React from "react";

function About(){
    return(
        <div className="flex flex-col">
                <div className="relative w-screen h-[40vh] md:h-[50vh]">
                    <div className="absolute text-center w-screen h-[40vh] md:h-[50vh] flex flex-col justify-center items-center px-16 py-8 z-30 text-white font-quality font-bold">
                        <h2 className="text-4xl px-12 py-2 border-b-2 border-b-white">Our Mission</h2>
                        <span className="py-4">
                            Our purpose is to provide compassionate comfort care to our patients and their families through our quality team of hospice professionals.
                        </span>
                    </div>
                    <div className="absolute w-screen h-[40vh] md:h-[50vh] bg-qualitydark opacity-80 z-10"></div>
                    <img 
                        src="/assets/wheelchair.jpg" 
                        alt="man in wheelchair recieves help" 
                        className="w-screen h-[40vh] md:h-[50vh] object-cover object-center" />
                </div>
                <div className="w-screen h-auto flex flex-col justify-center items-center">
                <div className="w-10/12 h-auto font-quality flex flex-col gap-6 py-12">
                    <h1 className=" text-2xl font-bold text-quality">Our Team</h1>
                    <span>Serving patients across all of Texas, our services are provided by a team of trained and experienced professionals, including physicians, nurses, counselors, social workers, therapists, home health aides and volunteers. We are available to offer assistance and support to patients and their families 24 hours a day, 7 days a week.</span>
                    <h1 className=" text-2xl font-bold text-quality">What is Hospice?</h1>
                    <span>Hospice care is a provision of compassionate care at the end of life for the terminally ill. The focus is on comfort and pain relief while maintaining the patient’s dignity and respect. Hospice also provides support for families and loved ones. It includes an individualized plan tailored to meet the needs of the patient. It includes health care, counseling, and spiritual support.</span>
                    <h1 className=" text-2xl font-bold text-quality">How Does It Work?</h1>
                    <span>You will meet with a hospice expert who will explain all that you need to know to make an informed decision. Your physician can remain involved or you may choose to have our Hospice Medical Director accommodate your care.<br/><br/>Your hospice nurse will work directly with you to determine the best treatment plan to meet your individual needs. This is a time in your life when you and your family get to make the decisions regarding your care. The care you receive from our hospice team is provided in the comfort of your home regardless of where you call home. Our hospice team communicates continuously to ensure your needs are met 24/7.</span>
                    <h1 className=" text-2xl font-bold text-quality">Who is Eligible?</h1>
                    <span>Hospice is available to anyone with a life-limiting illness with a prognosis of 6 months or less if the illness runs its normal course. The patient or the patient’s representative must choose to elect hospice as a treatment option and a physician must certify the patient’s eligibility. Most often the patient’s personal physician, in consultation with the hospice medical director, makes the determination.</span>
                    <h1 className=" text-2xl font-bold text-quality">How Is Hospice Paid?</h1>
                    <span>Hospice is paid 100% by Medicare. There are no co-pays or out-of-pocket expenses if you have Medicare. All of the services you will receive from hospice are fully covered. The Veterans Administration (VA) also provides a hospice benefit at no cost to the veteran. We implement this veteran-centered care. Eligible veterans enjoy standard medical benefits if they have a clinical need for hospice. Finally, we cater to most insurance plans. Private insurances generally have provisions for hospice care. Check with your insurer to determine your benefits and coverage.<br/><br/>We accept the following forms of insurance plans:<br/></span>
                        <ul className="pl-8 list-disc">
                            <li>Medicaid/Medi-Cal</li>
                            <li>Medicare</li>
                            <li>Private Pay</li>
                            <li>HMO / Private Insurance</li>
                        </ul>
                    <h1 className=" text-2xl font-bold text-quality">Non-Discriminatory Policy​</h1>
                    <span>Pursuant to Title VI of the Civil Rights Acts of 1964, Section 504 of the Rehabilitation Act of 1973, and Age Discrimination Act of 1975 H&A Hospice does not discriminate on the basis of race, ethnicity, color, sex, disability, age, national origin, or sexual orientation.</span>
                </div>
                </div>
        </div>
    )
}

export default About