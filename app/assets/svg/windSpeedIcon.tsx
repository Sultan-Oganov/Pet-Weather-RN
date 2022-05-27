import React, { FC } from 'react';
import Svg, { Path, ClipPath, Defs, G, Rect } from 'react-native-svg';

export const WindSpeedIcon: FC<{}> = () => {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
        >
            <G clipPath="url(#clip0_416_116)">
                <Path
                    d="M12.8696 2.08691C11.1433 2.08691 9.73913 3.49144 9.73913 5.21735C9.73913 5.40935 9.89461 5.56517 10.087 5.56517C10.2793 5.56517 10.4348 5.40935 10.4348 5.21735C10.4348 3.87474 11.5273 2.78257 12.8696 2.78257C14.2118 2.78257 15.3043 3.87474 15.3043 5.21735C15.3043 6.55996 14.2118 7.65213 12.8696 7.65213H0.347826C0.155826 7.65213 0 7.80796 0 7.99996C0 8.19196 0.155826 8.34778 0.347826 8.34778H12.8696C14.5958 8.34778 16 6.94326 16 5.21735C16 3.49144 14.5958 2.08691 12.8696 2.08691Z"
                    fill="black"
                />
                <Path
                    d="M6.26087 1.39136C4.91826 1.39136 3.82608 2.48353 3.82608 3.82614C3.82608 4.01814 3.98191 4.17396 4.17391 4.17396C4.36591 4.17396 4.52174 4.01814 4.52174 3.82614C4.52174 2.86718 5.30191 2.08701 6.26087 2.08701C7.21982 2.08701 8 2.86718 8 3.82614C8 4.78509 7.21982 5.56526 6.26087 5.56526H0.347826C0.155826 5.56526 0 5.72109 0 5.91309C0 6.10509 0.155826 6.26092 0.347826 6.26092H6.26087C7.60347 6.26092 8.69565 5.16874 8.69565 3.82614C8.69565 2.48353 7.60347 1.39136 6.26087 1.39136Z"
                    fill="black"
                />
                <Path
                    d="M12.1739 9.73926H0.347826C0.155826 9.73926 0 9.89508 0 10.0871C0 10.2791 0.155826 10.4349 0.347826 10.4349H12.1739C13.1329 10.4349 13.913 11.2151 13.913 12.174C13.913 13.133 13.1329 13.9132 12.1739 13.9132C11.215 13.9132 10.4348 13.133 10.4348 12.174C10.4348 11.982 10.2793 11.8262 10.087 11.8262C9.89461 11.8262 9.73913 11.982 9.73913 12.174C9.73913 13.5166 10.8316 14.6088 12.1739 14.6088C13.5162 14.6088 14.6087 13.5166 14.6087 12.174C14.6087 10.8314 13.5162 9.73926 12.1739 9.73926Z"
                    fill="black"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_416_116">
                    <Rect width={16} height={16} fill="black" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
