"use client"

import Image from "next/image"

export function File({ type, url }: { type: string, url: string }) {
    return (
        <div>
            {type.startsWith('image/') ? (
                <Image
                    priority
                    data-fancybox="gallery"
                    className="cursor-pointer border-r-2"
                    src={url}
                    alt='file'
                    width={350}
                    height={350}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAqFBMVEX////7+vqrvYH3smnhW2T0wpPAzKLhWGH3s2y1xJCywoz3r2LlhoununrgUVvlg4j2tna6x5nj6Nb0wI72uX7iZW3jcHf1+PHO17fx8Of48+711bnzu4PJ0KzEzKT37erts6bkc3L407Htrq3jd37ut7b117/z7eL139Huy6XljHvmlITX3cLhYWr2uXrfSlXibW7sxrvyyaHlmpj64s38+u300M3yyMvW4WpOAAACPUlEQVR4nO3X627aQBCGYRtj1ja21/jA0QmkuJS0mKZJk97/nXXWpISDlH+JUXkfRY40IDT6NLvetSwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgakxnZVLOpqfl9MYPbtPT6nxxV9wtzr58deyZ03ccp9//clQe3US9QRRF/uiovNSVUipWXz+zxUu0kswczwR3mNsk6HUaUTA5KC/jrjDBLT+7z8syzTwnydwsl9y+2YYUbXsssQ2CYOD3euOm0HyyjpUuVLcKw0qt2+68VfeZl7ill7u5k983+cjDDJvE5stToptYTVEe35UKh12ti0LrH2133qrE9bJSlmieOW5imXTM3ybyd7HJMvVTy0ygKcddiW0Y1krV4bDlxltlm9gSiU3+u/1mgZqQxlFnH1uw2cVm2aOfJrZKK9nf9HD0/i//15rYZF9zthKbZ++mzcQWnMVmS2yqmTZJTabtmmOzStfbulvZ33KnzCxrt41Zaaf3Flu639uqqtnbqrrW+qHtzlu1Kj2ZNNc1b9LV25v09mBvs/dv0l9aFqeqtXmTLtruvFV2IoddzzMHt+SgvIk6r6LNbgTNSh0Vyuxrqq7jh6teo3JwM7mZ0653dGMav+YWmWOb9W8M53Vz3u3GxbyVZi/I9LFvPJ7cM9NArlZRcHIpnT7FxhOXUpml9e+1fV6epOnkvPr88ufl+eN7AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwEf4CybUHJcWYDMNAAAAAElFTkSuQmCC"
                />
            ) : type.startsWith('video/') ? (
                <video controls src={url} />
            ) : type.startsWith('audio/') ? (
                <audio controls src={url} />
            ) : (
                <p>Unsupported file type</p>
            )}
        </div>
    )
}