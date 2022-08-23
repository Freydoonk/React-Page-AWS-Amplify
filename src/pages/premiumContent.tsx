import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const PremiumContent = () => {
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                    <h1>Premium content Page</h1>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
}

export default PremiumContent;