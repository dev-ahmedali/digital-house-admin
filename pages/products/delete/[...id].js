import Layout from "@/components/Layout";

export default function DeleteProductPage() {
    function goBack() {
        // code goes here
    }
    return (
        <Layout>
            Do you really want to delete product x
           <button>Yes</button>
           <button>No</button>
        </Layout>
    )
}