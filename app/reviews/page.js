import Reviews from "@/components/reviews";

export const metadata = {
    title: 'Reviews',
    description: " Don't believe us, Hear from our students ",
    robots:"index,follow",
    keywords: "midhafin reviews, frm reviews"
  }
export default function Page() {
    return (
        <>
            <div>
                <Reviews/>
            </div>
        </>
    );
}

  

