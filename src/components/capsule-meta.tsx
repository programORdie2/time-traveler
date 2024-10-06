export default function CapsuleMeta({ capsule }: { capsule: { id: string, name: string, description: string, files: { name: string, type: string, cid: string, id: string }[], unlockDate: Date, createdAt: Date } }) {
    return (
        <div>
            <h1 className="text-3xl font-bold">{capsule.name}</h1>
            <p className="text-xl mb-0">{capsule.description}</p>
            <span className="text-gray-600">{`${capsule.files.length} ${capsule.files.length === 1 ? 'file' : 'files'}`}</span>
            <br />
            <span className="text-gray-600 mb-4">Created {capsule.createdAt.toLocaleDateString()}</span>
        </div>
    )
}