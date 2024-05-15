export default function TemporaryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h5 className=" text-green-400">
                This is an layout page under the folder named Temporary.
            </h5>
            {children}
        </>
    );
}
