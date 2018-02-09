//
//  IRLPlayerView.h
//  iosRnLayout
//
//  Created by Pierre Segalen on 09/02/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#ifndef IRLPlayerView_h
#define IRLPlayerView_h
#import <UIKit/UIKit.h>
#import <React/RCTView.h>

@class RCTBridge;

@interface IRLPlayerView: UIView

- (instancetype)initWithBridge:(RCTBridge *)bridge NS_DESIGNATED_INITIALIZER;

@end

#endif /* IRLPlayerView_h */
