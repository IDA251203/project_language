import Link from "next/link";
import { useRouter } from "next/router";
import Home from '../../index';

const Post = () => { 
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <Home />
            <h1>Person: {id}</h1>
            <ul>
                <li>
                <Link href="/name/[slug]/[person1]" as={`/name/${id}/1`}>
                        Person1
                    </Link>
                </li>
                <li>
                    <Link href="/name/[slug]/[person1]" as={`/name/${id}/2`}>
                        Person2
                    </Link>
                </li>
                <li>
                <Link href="/name/[slug]/[person1]" as={`/name/${id}/3`}>
                        Person3
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Post;